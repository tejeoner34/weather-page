import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { Stack } from '@mui/material';
import lluvia from '../assets/lluvia.png';
import upArrow from '../assets/upArrow.png';
import downArrow from '../assets/downArrow.png';
import humidity from '../assets/water.png';
import './style.css';

export default function WeekCard() {
  return (
    <Fragment>
    <Card square={true} className="card" sx={{ maxWidth: 150, boxShadow:'sucess.main'
     } }>
       
       <Typography gutterBottom variant="h6" component="h3">
          Viernes
        </Typography>
      <CardMedia
        component="img"
        className= "image_card"
        alt="icono tiempo diario"
        image={lluvia}
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
              Máx:26º
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
              Min:22º
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
              mm:10%
            </Typography>
          </Stack>
        </CardContent>
    
    </Card>
    </Fragment>
  );
}