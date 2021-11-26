import { Box, Card, Grid } from "@material-ui/core"

export default function WeekDayContainer(){


    return(
        <Grid container direction="row">
            <Grid item container direction="row" xs={12}>
            <Card> WeekDay </Card>
            <Card> WeekDay </Card>
            <Card> WeekDays </Card>
            <Card> WeekDay </Card>
            <Card> WeekDay </Card>
            <Card> WeekDays </Card>
            <Card> WeekDay </Card>
            <Card> dWeekDay </Card>
            </Grid>
        </Grid>
    )
}