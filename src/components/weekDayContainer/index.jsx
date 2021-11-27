import { Grid } from '@mui/material';
import WeekCard from './cardWeekDay';
import './style.css';


export default function WeekDayContainer(props){



    return(
        <Grid container direction="row" >
            <Grid className="grid_container_card" item container direction="row" xs={12} justifyContent="space-evenly">
                {props.data.daily?.slice(1,8).map((d,index)=> <WeekCard  key={index} data={d} ></WeekCard>)}
            
            </Grid>
        </Grid>
    )
}