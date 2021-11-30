import { Box} from '@mui/material'
import React from 'react';
import { MetricContext } from '../../context/metric-context';
import { useContext } from 'react';
export default function DailiesComponent(props) {
    const [metric] = useContext(MetricContext);
// esto s para borrar
// esto s para borrar
    return (
        <React.Fragment>
            <Box xs={12} 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: "center",
                    backgroundColor: '#FDECF2B5',
                    height:"40px",
                    typography: 'p',
                    color: 'primary.accent',
                    fontFamily: 'OrbitronBold',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
                }}>mm: {props.data?.daily?.[0].rain ?
                    props.data?.daily?.[0].rain :
                    0}%
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "center",
                    textAlign: 'center',
                    backgroundColor: '#FDECF2B5',
                    height:"40px",
                    fontFamily: "'OrbitronBold'",
                    typography: 'p',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
                }}>Máx: {Math.round(props.data?.daily?.[0].temp.max)}º {metric === 'metric' ? 'C' : 'F'}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "center",
                    height:"40px",
                    backgroundColor: '#FDECF2B5',
                    fontFamily: 'OrbitronBold',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
                }}>
                Min: {Math.round(props.data?.daily?.[0].temp.min)}º {metric === 'metric' ? 'C' : 'F'}
            </Box>
        </React.Fragment>
    )
}