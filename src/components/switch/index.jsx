 import { Grid, Box } from "@mui/material"
 
 
 export default function UnitChange(){



    return (
        <Grid container xs={2}>
            <Grid item>
                <Box className="grid__style--item">
                    Cº
                </Box>
                <Grid item className="grid__style--item">
                    <Box>
                        Fº
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
 }