import { Grid } from '@mui/material';
import WeekCard from './cardWeekDay';
import './style.css';


export default function WeekDayContainer(props){



    return(
        <Grid container direction="row">
            <Grid item container direction="row" xs={12} justifyContent="flex-start">
                {props.data.daily?.slice(1,8).map((d,index)=> <WeekCard  key={index} data={d} ></WeekCard>)}
            
            </Grid>
        </Grid>
    )
}