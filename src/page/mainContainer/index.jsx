import {Grid} from '@mui/material'
import * as React from 'react';
import './style.css'
import BasicTextField from '../../components/input';
import UnitChange from '../../components/switch';
import AvatarContainer from '../../components/avatarContainer';

import WeekDayContainer from '../../components/weekDayContainer';
import ActualDay from '../../components/actualDay';

export default function MainContainer() {

    return (
        <Grid container className="grid__style" rowSpacing={"80px"}>
            <Grid item xs={9}>
                <BasicTextField></BasicTextField>
            </Grid>
            <Grid item xs={2} className="grid__style">
                <UnitChange></UnitChange>
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