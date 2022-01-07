import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { Stack, Box } from '@mui/material';
import upArrow from '../assets/upArrow.png';
import downArrow from '../assets/downArrow.png';
import humidity from '../assets/water.png';
import './style.css';
export default function WeekCard(props) {
  let dataData = parseInt(props.data.dt);
  let dataDate = dataData * 1000;
  let monthDay = new Date(dataDate).getDate();
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const numeroDia = new Date(dataDate).getDay();
  const nombreDia = dias[numeroDia];
  return (
    <Fragment>
      <Card square={true} className="card_container" variant="elevation: 2" sx={{
        width: '116px', height: '170px', bgcolor: '#F0EFF2'
      }}>
        <Typography variant="p" fontFamily='OrbitronBold' fontSize='15px'>
          {`${nombreDia}, ${monthDay}`}
        </Typography>
        <CardMedia
          component="img"
          className="image_card"
          alt="icono tiempo diario"
          image={window.location.origin + `/img/icons/${props.data.weather[0].icon}.png`}
        />
        <Box className='temperature_container' fontSize='11px' fontFamily='OrbitronLight'>
          <Stack direction="row"
            justifyContent="flex-start"
            gap="5px"
            alignItems="center">
            <CardMedia
              component="img"
              className="image"
              alt="icono tiempo diario"
              image={upArrow}
            />
            <Typography variant="p" color="textSecondary" >
              Máx: {Math.round(props.data.temp.max)}º
            </Typography>
          </Stack>
          <Stack direction="row"
            justifyContent="flex-start"
            gap="5px"
            alignItems="center">
            <CardMedia
              component="img"
              className="image"
              alt="icono tiempo diario"
              image={downArrow}
            />
            <Typography variant="p" color="textSecondary" >
              Min: {Math.round(props.data.temp.min)}º
            </Typography>
          </Stack>
          <Stack direction="row"
            justifyContent="flex-start"
            gap="5px"
            alignItems="center"
          >
            <CardMedia
              component="img"
              className="image"
              alt="icono tiempo diario"
              image={humidity}
            />
            <Typography variant="p" color="textSecondary">
              mm: {props.data.rain ? props.data.rain : 0}%
            </Typography>
          </Stack>
        </Box>
      </Card>
    </Fragment>
  );
}