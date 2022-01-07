import { Box, Grid } from '@mui/material'
import ActualInfo from "../actualInfo";
import DailiesComponent from '../dailiesComponent';
import AvatarContainer from '../../components/avatarContainer';
import './style.css';
import {MetricContext} from '../../context/metric-context.js';
import { useContext } from 'react';
// esto es para borrar
// esto es para borrar
export default function ActualDay(props) {
    const [metric] = useContext(MetricContext)
    let dataData = parseInt(props.current?.dt);
    let myDate = new Date(dataData*1000)
    let weekDay = myDate.getDay();
    let monthDay = myDate.getDate();
    let month = myDate.getMonth();
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];
    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];
    let actualMonth = monthNames[month];
    let actualDay = dias[weekDay];
    const fecha = actualDay + ' ' + monthDay + '  de ' + actualMonth;
    return (
        <Grid container sx={{ backgroundImage: `url(${window.location.origin + `/img/weather-img/${props.data?.current?.weather[0].icon}.png`})` }} justifyContent="space-between" flexDirection="row">
            <Grid item container xs={12}
                justifyContent="space-between"
                flexDirection="row"
                spacing={2}
                sx={{ marginTop: '0', marginLeft: '1em', marginRight: '1em' }}>
                <Grid container item xs={4} justifyContent="start" flexDirection="column" rowGap={4} >
                    <Box
                        sx={{
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            justifyContent: "center",
                            backgroundColor: '#FDECF2B5',
                            typography: 'p',
                            color: 'text',
                            fontFamily: 'MinecraftBold',
                            fontSize: '18px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
                        }}
                    >{fecha}</Box>
                    <Box
                        sx={{
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: "center",
                            backgroundColor: '#FDECF2B5',
                            typography: 'p',
                            color: 'text',
                            fontFamily: 'Minecraft',
                            fontSize: '96px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
                        }}
                    >{Math.round(props.data.current?.temp)}º{metric === 'metric'? 'C':'F'}</Box>
                </Grid>
                <Grid item container xs={2} justifyContent="space-between" alignItems='center' flexDirection='column' rowGap={15} >
                    <Grid item container justifyContent="space-between" flexDirection='column' rowGap={2}>
                        <DailiesComponent data={props.data}></DailiesComponent>
                    </Grid>
                    <Grid item paddingBottom="30px">
                        <AvatarContainer data={props.current}></AvatarContainer>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <ActualInfo data={props.data} moon={props.moon}></ActualInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}