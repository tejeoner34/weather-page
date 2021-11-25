import { Grid } from '@material-ui/core';
import * as React from 'react';
import './style.css'
import BasicTextField from '../input';
import CustomizedSwitch from '../switch';
import AvatarContainer from '../avatarContainer';

import WeekDayContainer from '../weekDayContainer';
import ActualDay from '../actualDay';

export default function MainContainer() {

    return (
        <Grid container className="grid__style">
            <Grid item xs={9}>
                <BasicTextField></BasicTextField>
            </Grid>
            <Grid item xs={2} className="grid__style">
                <CustomizedSwitch></CustomizedSwitch>
            </Grid> 
            <Grid item xs={3} className="grid__style">
                <AvatarContainer></AvatarContainer>
            </Grid>
            <Grid item container xs={9} className="grid__style">
                <ActualDay></ActualDay>
            </Grid>
            <Grid item container xs={12} className="grid__style">
            <WeekDayContainer></WeekDayContainer>
            </Grid>
        </Grid>
    )
}