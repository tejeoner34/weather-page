import { Typography, Stack, Box } from '@mui/material';
import './style.css'
import MoonCard from '../moonCard/moonCard';
import { MetricContext } from '../../context/metric-context';
import { useContext } from 'react';
export default function ActualInfo(props) {
    // esto es para borrar
    // esto es para borrar
    const addZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const sunset = new Date(props.data.current?.sunset * 1000);
    const hoursSunset = addZero(sunset.getHours());
    const minutesSunset = addZero(sunset.getMinutes());
    let currentSunset = `${hoursSunset}:${minutesSunset}`;
    const sunrise = new Date(props.data.current?.sunrise * 1000);
    const hoursSunrise = addZero(sunrise.getHours());
    const minutesSunrise = addZero(sunrise.getMinutes());
    let currentSunrise = `${hoursSunrise}:${minutesSunrise}`;
    const [metric] = useContext(MetricContext)
    return (
        <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-around",
                color: '#F3F3F4',
                paddingBottom:"100px"
            }}>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="7em"
                rowGap={2}
                spacing={-3}
            >
                <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px' >
                    {Math.round(props.data.current?.feels_like)}º {metric === 'metric' ? 'C' : 'F'}
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Sensación térmica
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="7em"
                rowGap={2}
                spacing={-3}>
                 <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px'>
                    {Math.round(props.data.current?.wind_speed)} KPH
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Velocidad viento
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="7em"
                rowGap={2}
                spacing={-3}>
                 <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px'>
                    {Math.round(props.data.current?.humidity)}%
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Humedad ambiental
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                textAlign="center"
                width="7em"
                rowGap={2}
                spacing={-3}>
                 <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px'>
                    {props.data.current?.uvi >= 6 ? 'Alto' : 'Bajo'}
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Índice UV
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="7em"
                rowGap={2}
                spacing={-3}>
                 <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px'>
                    {currentSunrise}
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Amanecer
                </Typography>
                <Typography variant="p" fontFamily='OrbitronBold' fontSize='20px'>
                    {currentSunset}
                </Typography>
                <Typography variant="p" textAlign="center" fontFamily='OrbitronLight' fontSize='14px'>
                    Atardecer
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="7em"
                rowGap={1}
                color='textSecondary'
            >
                <MoonCard datos={props.moon}></MoonCard>
            </Stack>
        </Box>
    );
}