import { Grid } from '@material-ui/core';
import * as React from 'react';
import './style.css'
import BasicTextField from '../input';
import CustomizedSwitch from '../switch';
import AvatarContainer from '../avatarContainer';
import DailiesComponent from '../dailiesComponent';

export default function MainContainer() {

    return (
        <Grid container xl={12}>
            <Grid item xl={6}>
                <BasicTextField></BasicTextField>
            </Grid>
            <Grid item xl={2}>
                <CustomizedSwitch></CustomizedSwitch>
            </Grid>
            <Grid item>
                <AvatarContainer></AvatarContainer>
            </Grid>
            <Grid container xl={9}>
                <Grid item>
                    <DailiesComponent></DailiesComponent>
                </Grid>

            </Grid>
        </Grid>
    )
}