// import { Grid, Box } from '@mui/material'

// export default function DailiesComponent() {


//     return (
//         <Grid container >
//             <Grid item xs={12}>
//                 <Box sx={{
//                     bgcolor: '#ff0000',
//                 }}> dailies </Box>
//                 <Box sx={{
//                     bgcolor: '#ff0000',
//                 }}> dailies </Box>
//                 <Box sx={{
//                     bgcolor: '#ff0000',
//                 }}> dailies </Box>
//             </Grid>
//         </Grid>
//     )
// }

import { Box, Typography } from '@mui/material'
import React from 'react';
import { MetricContext } from '../../context/metric-context';
import { useContext } from 'react';
export default function DailiesComponent(props) {

    const [metric] = useContext(MetricContext);

    return (
        <React.Fragment>
            <Box xs={12}
                sx={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign:'center', 
                    justifyContent:"center",
                    backgroundColor: '#FDECF2B5',
                    typography:'p',
                    color:'text',
                    fontFamily:'Orbitron'
                }}>mm: {props.data?.daily?.[0].rain?
                                                 props.data?.daily?.[0].rain:
                                                 0}%
            </Box>
            <Box  
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:"center",
                        textAlign: 'center',
                        backgroundColor: '#FDECF2B5',
                        fontFamily: 'Orbitron',
                        typography: 'p',
                    }}>Máx:{Math.round(props.data?.daily?.[0].temp.max)}º {metric === 'metric'? 'C':'F'}
            </Box>
            <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:"center",
                        backgroundColor: '#FDECF2B5',
                        fontFamily:'Orbitron',
                    }}>
                Min:{Math.round(props.data?.daily?.[0].temp.min)}º {metric === 'metric'? 'C':'F'}
            </Box>
        </React.Fragment>
    )
}