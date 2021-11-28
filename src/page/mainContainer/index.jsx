import { Grid } from '@mui/material'
import * as React from 'react';
import './style.css'
import BasicTextField from '../../components/input';
import UnitChange from '../../components/switch';
import AvatarContainer from '../../components/avatarContainer';
import WeekDayContainer from '../../components/weekDayContainer';
import ActualDay from '../../components/actualDay';
import { useEffect, useState } from 'react';
import { MetricContext } from '../../context/metric-context';
import { useContext } from "react";
import GeoButton from '../../components/geo-button-component/geo-button-component';


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

    return (
        <Grid container className="grid__style" rowSpacing={"80px"}>
            <Grid item xs={9}>
                <BasicTextField onSearch={onWeatherSearch}></BasicTextField>
            </Grid>
            <Grid item xs={1}>
                <GeoButton onSelectGeo={onHandleGeoLocalization}></GeoButton>
            </Grid>
            <Grid item xs={2} className="grid__style">
                <UnitChange onMetricChange={onMetricChange}></UnitChange>
            </Grid>
            <Grid item xs={3} className="grid__style">
                <AvatarContainer data={weatherInfo?.current}></AvatarContainer>
            </Grid>
            <Grid item container xs={9} className="grid__style">
                <ActualDay data={weatherInfo} moon={moon}></ActualDay>
            </Grid>
            <Grid item container xs={12} className="grid__style">
                <WeekDayContainer data={weatherInfo}></WeekDayContainer>
            </Grid>
        </Grid>
    )
}