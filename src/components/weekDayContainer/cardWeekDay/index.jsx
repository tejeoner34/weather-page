import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { Stack } from '@mui/material';

import upArrow from '../assets/upArrow.png';
import downArrow from '../assets/downArrow.png';
import humidity from '../assets/water.png';
import './style.css';

export default function WeekCard(props) {

  let dataData = parseInt(props.data.dt);
  let dataDate = dataData*1000;

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
    <Card square={true} className="card" sx={{ maxWidth: 150, boxShadow:''
     } }>
       <Typography gutterBottom variant="h6" component="h2">
          {`${nombreDia}, ${monthDay}`}
        </Typography>
      <CardMedia
        component="img"
        className= "image_card"
        alt="icono tiempo diario"
        image={window.location.origin +`/img/icons/${props.data.weather[0].icon}.png`}
      />
       <CardContent>
         <Stack spacing="2" direction="row"
                justifyContent="center"
                alignItems="center">
            <CardMedia
              component="img"
              className= "image"
              alt="icono tiempo diario"
              image={upArrow}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Máx:{Math.round(props.data.temp.max)}º
            </Typography>
          </Stack>
          <Stack direction="row"
                justifyContent="center"
                alignItems="center">
            <CardMedia
              component="img"
              className= "image"
              alt="icono tiempo diario"
              image={downArrow}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Min:{Math.round(props.data.temp.min)}º
            </Typography>
          </Stack>
          <Stack direction="row"
                justifyContent="center"
                alignItems="center">
            <CardMedia
              component="img"
              className= "image"
              alt="icono tiempo diario"
              image={humidity}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              mm:{props.data.rain? props.data.rain: 0}%
            </Typography>
          </Stack>
        </CardContent>
    
    </Card>
    </Fragment>
  );
}