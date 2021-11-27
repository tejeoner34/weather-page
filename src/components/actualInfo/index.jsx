
import {  Typography, Stack, Box } from '@mui/material';
import './style.css'
import MoonCard from '../moonCard/moonCard';
export default function ActualInfo(props){

    const addZero = (num)=>{
        return num<10? `0${num}` : num;
    }

    const sunset = new Date(props.data.current?.sunset*1000);
    const hoursSunset = addZero(sunset.getHours());
    const minutesSunset = addZero(sunset.getMinutes());

    let currentSunset = `${hoursSunset}:${minutesSunset}`;

    const sunrise = new Date(props.data.current?.sunrise*1000);
    const hoursSunrise = addZero(sunrise.getHours());
    const minutesSunrise = addZero(sunrise.getMinutes());

    let currentSunrise = `${hoursSunrise}:${minutesSunrise}`;


    


    return (
        
        <Box xs={12} md={12}
            sx={{
                display: 'flex',
                flexDirection: { xs:'row' },
                alignItems: 'center',
                justifyContent:"space-around"
            }} 
            className="card_ActualInfo" >
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                {Math.round(props.data.current?.feels_like)}º C
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p"textAlign="center">
                    Sensación térmica
                </Typography>        
               
            </Stack>
             <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                {Math.round(props.data.current?.wind_speed)} KPH
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                    Velocidad viento
                    </Typography>       
               
            </Stack>
             <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                {Math.round(props.data.current?.humidity)}%
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Humedad ambiental
                </Typography>        
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                    {props.data.current?.uvi>= 6?'Alto':'Bajo'}
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Índice UV
                </Typography>        
            </Stack>
     
           <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                    {currentSunrise}
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Amanecer
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    {currentSunset}
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Atardecer
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                >
                    <MoonCard datos={props.moon}></MoonCard>
            </Stack>
        </Box>
    );
}