import { Grid } from '@mui/material'
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


    const serverFetchURL = 'http://localhost:4567/weather'

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

            fetch(`${serverFetchURL}/current-data?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
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
        fetch(`${serverFetchURL}/search-data?q=${item}`)
            .then(r => r.json())
            .then(d => {
                if(d.cod !== 200){
                    console.log(d.status)
                }else{

                
                // setData(oldvalue=> oldvalue.splice(0,1));
                setLat(d.coord.lat);
                setLon(d.coord.lon);
                return fetch(`${serverFetchURL}/get-searched-data?lat=${d.coord.lat}&lon=${d.coord.lon}&units=${metric}`)
                    .then(r => r.json())
                    .then(d => {
                        updateWeatherInfo({ ...d })
                    })}
            });
    };

    const onMetricChange = (childata) =>{
        fetch(`${serverFetchURL}/metric-change?lat=${lat}&lon=${lon}&units=${childata}`)
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
            fetch(`${serverFetchURL}/current-localization?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
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
        <Grid container style={styles.gridContainer} justifyContent="center" sx={{height: '100vh'}} className="body" >
        <Grid item container sx={{ maxWidth: "890px"}} justifyContent="space-between" alignItems="center">
            <Grid item container xs={9} gap="15px"> 
                <BasicTextField onSearch={onWeatherSearch}></BasicTextField>
                <GeoButton onSelectGeo={onHandleGeoLocalization}></GeoButton>
            </Grid>
            <Grid item xs={2}>
                <UnitChange onMetricChange={onMetricChange}></UnitChange>
            </Grid>
            <Grid item container xs={12} sx={{maxHeight:"509px", overflow:"hidden", marginTop:'-10px'}} className="grid__style--item">
                {weatherInfo&& <ActualDay current={weatherInfo.current} data={weatherInfo} moon={moon}></ActualDay>}
            </Grid>
            <Grid item container xs={12}>
                <WeekDayContainer data={weatherInfo}></WeekDayContainer>
            </Grid>
        </Grid>
        </Grid>
    )
}