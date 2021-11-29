import { Grid, Box } from '@mui/material'
import * as React from 'react';
import './style.css'
import BasicTextField from '../../components/input';
import UnitChange from '../../components/switch';
import WeekDayContainer from '../../components/weekDayContainer';
import ActualDay from '../../components/actualDay';
import { useEffect, useState } from 'react';
import { MetricContext } from '../../context/metric-context';
import { useContext } from "react";
import GeoButton from '../../components/geo-button-component/geo-button-component';
import Background from '../../page/assets/Background.png';


export default function MainContainer() {

    const API = '';
    const [metric] = useContext(MetricContext);
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [moon, updateMoon] = useState(0);
    const [weatherInfo, updateWeatherInfo] = useState({});

    //useEffect que se ecarga de obtener los datos de localizacion y hacer la primera llamada fetch
    useEffect(() => {
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log('error');
            }
        };
        // funcion que se encarga de hacer una llamada fetch usando los datos de localizacion obtenidos del navegador. También guardamos esta localizacion en el estado
        const showPosition = (position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,minutely&units=metric&appid=${API}`)
                .then(r => r.json())
                .then(d => {
                    updateWeatherInfo({ ...d })
                    console.log(d)
                    const luna = d.daily[0].moon_phase;
                    updateMoon(luna);
                });
        }
        getCurrentLocation();
    }, []);


    const onWeatherSearch = (childata) => {
        let item = childata;
        item===''?item='madrid': item = childata
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${API}`)
            .then(r => r.json())
            .then(d => {
                // setData(oldvalue=> oldvalue.splice(0,1));
                setLat(d.coord.lat);
                setLon(d.coord.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${d.coord.lat}&lon=${d.coord.lon}&exclude=hourly,minutely&units=${metric}&appid=${API}`)
                    .then(r => r.json())
                    .then(d => {
                        updateWeatherInfo({ ...d })
                    })
            });
    };

    const onMetricChange = (childata) =>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${childata}&appid=${API}`)
            .then(r => r.json())
            .then(d => {
                updateWeatherInfo({ ...d })
            });
    };


    const onHandleGeoLocalization = ()=>{
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log('error');
            }
        };
        // funcion que se encarga de hacer una llamada fetch usando los datos de localizacion obtenidos del navegador. También guardamos esta localizacion en el estado
        const showPosition = (position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,minutely&units=metric&appid=${API}`)
                .then(r => r.json())
                .then(d => {
                    updateWeatherInfo({ ...d })
                    const luna = d.daily[0].moon_phase;
                    updateMoon(luna);
                });
        }
        getCurrentLocation();
    }

    const styles = {
        gridContainer: {
            backgroundImage: `url(${Background})`
        }
    };




    return (
        <Grid container style={styles.gridContainer} justifyContent="center" sx={{height: '100vh'}} >
        <Grid item container sx={{ maxWidth: "890px"}} justifyContent="space-between" alignItems="center">
            <Grid item container xs={9} gap="15px"> 
                <BasicTextField onSearch={onWeatherSearch}></BasicTextField>
                <GeoButton onSelectGeo={onHandleGeoLocalization}></GeoButton>
            </Grid>
            <Grid item xs={2}>
                <UnitChange onMetricChange={onMetricChange}></UnitChange>
            </Grid>
            <Grid item container xs={12} sx={{maxHeight:"500px", overflow:"hidden"}} className="grid__style--item">
                <ActualDay current={weatherInfo.current} data={weatherInfo} moon={moon}></ActualDay>
            </Grid>
            <Grid item container xs={12}>
                <WeekDayContainer data={weatherInfo}></WeekDayContainer>
            </Grid>
        </Grid>
        </Grid>
    )
}