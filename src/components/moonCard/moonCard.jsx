import { Typography, CardMedia} from '@mui/material';
import React from 'react';

export default function MoonCard(props) {




    if (props.datos === 0 || props.datos === 1) {
        return (
            <React.Fragment>
                <CardMedia
                    component="img"
                    className="image_actualinfo"
                    alt="icono tiempo diario"
                    image={window.location.origin + `/img/moon/01n.png`}
                />
                <Typography variant="body2" color='#F3F3F4' component="p">
                    Fase Lunar
                </Typography>
                </React.Fragment>
        );
    } else if (props.datos > 0 && props.datos < 0.25) {

        return (
            <React.Fragment>
                <CardMedia
                    component="img"
                    className="image_actualinfo"
                    alt="icono tiempo diario"
                    image={window.location.origin + `/img/moon/creciente.png`}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    Fase Lunar
                </Typography>
                </React.Fragment>
        );
    } else if (props.datos === 0.25) {

        return (
            <React.Fragment>
            <CardMedia
                component="img"
                className="image_actualinfo"
                alt="icono tiempo diario"
                image={window.location.origin + `/img/moon/mitadcreciente.png`}
            />
            <Typography variant="body2" color="textSecondary" component="p">
                Fase Lunar
            </Typography>
            </React.Fragment>
        );

    } else if (props.datos > 0.25 && props.datos < 0.5) {

        return (
            <React.Fragment>
                <CardMedia
                    component="img"
                    className="image_actualinfo"
                    alt="icono tiempo diario"
                    image={window.location.origin + `/img/moon/muycreciente.png`}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    Fase Lunar
                </Typography>
                </React.Fragment>
        );

    } else if (props.datos === 0.5) {
        return (
            <React.Fragment>
            <CardMedia
                component="img"
                className="image_actualinfo"
                alt="icono tiempo diario"
                image={window.location.origin + `/img/moon/01n.png`}
            />
            <Typography variant="body2" color="textSecondary" component="p">
                Fase Lunar
            </Typography>
            </React.Fragment>
        );
    } else if (props.datos > 0.5 && props.datos < 0.75) {
        return (
            <React.Fragment>
            <CardMedia
                component="img"
                className="image_actualinfo"
                alt="icono tiempo diario"
                image={window.location.origin + `/img/moon/decreciente.png`}
            />
            <Typography variant="body2" color="textSecondary" component="p">
                Fase Lunar
            </Typography>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
            <CardMedia
                component="img"
                className="image_actualinfo"
                alt="icono tiempo diario"
                image={window.location.origin + `/img/moon/pocodecreciente.png`}
            />
            <Typography variant="body2" color="textSecondary" component="p">
                Fase Lunar
            </Typography>
            </React.Fragment>
        );

        }
    
}
