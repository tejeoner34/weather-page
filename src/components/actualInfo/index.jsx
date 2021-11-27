import {  Typography, Stack, CardMedia } from '@mui/material';
import './style.css'
import faseLunar from './faseLunar/Asset 21.png';


export default function ActualInfo(){

    return (
        <Stack xs={12} 
            direction="row" 
            spacing={5}
            justifyContent="space-around"
            alignItems="center"
            square={true} className="card_ActualInfo" >
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                width="4em"
                spacing={-3}>
                <Typography gutterBottom variant="h6" component="h4">
                    34º C
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
                    5 KPH
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
                    60%
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
                    Alto
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
                    8:12
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Amanecer
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    18:12
                </Typography>        
                <Typography variant="body2" color="textSecondary" component="p">
                    Atardecer
                </Typography>
            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                >
                    <CardMedia
                        component="img"
                        className= "image_actualinfo"
                        alt="icono tiempo diario"
                        image={faseLunar}
                    />
                    <Typography variant="body2" color="textSecondary" component="p">
                        Fase Lunar
                    </Typography>
            </Stack>
        </Stack>

    );
}