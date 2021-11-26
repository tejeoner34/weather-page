import { Box, Grid } from '@mui/material'
import ActualInfo from "../actualInfo";
import DailiesComponent from '../dailiesComponent';
import './style.css'

export default function ActualDay() {


    return (
        <Grid container >
            <Grid item container xs={12} 
            justifyContent="space-between" 
            className="grid__style--item" 
            spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{
                        bgcolor: '#ff0000',
                        border: 'solid',
                    }}>contenido</Box>
                </Grid>
                <Grid item xs={2}>
                    <DailiesComponent></DailiesComponent>
                </Grid>
                <Grid item xs={12}>
                    <ActualInfo></ActualInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}