

import { Box } from '@mui/material'
import React from 'react';
import { MetricContext } from '../../context/metric-context';
import { useContext } from 'react';


export default function DailiesComponent(props) {

    const [metric] = useContext(MetricContext);

    return (
        <React.Fragment>
            <Box xs={12}
                sx={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign:'center', 
                    justifyContent:"center",
                    backgroundColor: '#FDECF2B5',
                    typography:'p',
                    color:'text',
                    fontFamily:'OrbitronBold',
                    fontSize:"16px"
                }}>mm: {props.data?.daily?.[0].rain?props.data?.daily?.[0].rain:0}%
            </Box>
            <Box  
                    sx={{
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:"center",
                        textAlign: 'center',
                        backgroundColor: '#FDECF2B5',
                        fontFamily:'OrbitronBold',
                        fontSize:"16px",
                        typography: 'p',
                    }}>Máx:{Math.round(props.data?.daily?.[0].temp.max)}º {metric === 'metric'? 'C':'F'}
            </Box>
            <Box 
                    sx={{
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:"center",
                        backgroundColor: '#FDECF2B5',
                        fontFamily:'OrbitronBold',
                        fontSize:"16px"
                    }}>
                Min:{Math.round(props.data?.daily?.[0].temp.min)}º {metric === 'metric'? 'C':'F'}
            </Box>
        </React.Fragment>
    )
}