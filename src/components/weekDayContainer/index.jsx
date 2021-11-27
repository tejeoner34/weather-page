import { Grid } from '@mui/material';
import WeekCard from './cardWeekDay';
import './style.css';


export default function WeekDayContainer(){


    return(
        <Grid container direction="row" >
            <Grid className="grid_container_card" item container direction="row" xs={12} justifyContent="space-evenly">
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            <WeekCard> </WeekCard>
            </Grid>
        </Grid>
    )
}