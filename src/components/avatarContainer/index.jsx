import { Box } from '@mui/material'
import { MetricContext } from '../../context/metric-context';
import { useContext } from "react";

export default function AvatarContainer(props) {

    const [metric] = useContext(MetricContext);




    if(props.data?.weather[0].icon === '11d' || props.data?.weather[0].icon === '11n' || props.data?.weather[0].icon ==='09d'|| props.data?.weather[0].icon ==='09n'||props.data?.weather[0].icon ==='10d'||props.data?.weather[0].icon ==='10n'){
        return (

            <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', mt:"5px", mb:"5px"}}>
                <img style={{height: '70%'}} src={window.location.origin + "/img/avatar/asset39.png"} alt="Avatar" />
            </Box>
        )
    }else if(props.data?.weather[0].icon === '13d' || props.data?.weather[0].icon === '13n' || (metric === 'metric' && props.data?.temp<10) || (metric === 'imperial' && props.data?.temp<50 )){
        return (

            <Box sx={{display: 'flex', justifyContent: 'center',alignItems: 'center' , mt:"5px", mb:"5px"}}>
                <img style={{height: '70%'}} src={window.location.origin + "/img/avatar/asset41.png"} alt="Avatar" />
            </Box>
        )
    }else if((metric === 'metric' && props.data?.temp>30) || (metric === 'imperial' && props.data?.temp>86 )){
        return (

            <Box sx={{display: 'flex', justifyContent: 'center',alignItems: 'center' , mt:"5px", mb:"5px"}}>
                <img style={{height: '70%'}} src={window.location.origin + "/img/avatar/asset42.png"} alt="Avatar" />
            </Box>
        )
    }else if((metric === 'metric' && props.data?.temp>20 && props.data?.temp<=30)||(metric === 'imperial' && props.data?.temp>68 &&  props.data?.temp<=86)){
        return (

            <Box sx={{display: 'flex', justifyContent: 'center',alignItems: 'center' , mt:"5px", mb:"5px"}}>
                <img style={{height: '70%'}} src={window.location.origin + "/img/avatar/asset40.png"} alt="Avatar" />
            </Box>
        )
    }else{
        return (

            <Box sx={{display: 'flex', justifyContent: 'center',alignItems: 'center' , mt:"5px", mb:"5px"}}>
                <img style={{height: '70%'}} src={window.location.origin + "/img/avatar/asset43.png"} alt="Avatar" />
            </Box>
        )
    }
    
}

