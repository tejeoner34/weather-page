import { Box, Grid } from '@mui/material'
import ActualInfo from "../actualInfo";
import DailiesComponent from '../dailiesComponent';
import AvatarContainer from '../../components/avatarContainer';
import './style.css'
import Niebla from '../../page/assets/bgImagesDiarias/lluviamedio.png';

const styles = {
    gridContainer: {
        backgroundImage: `url(${Niebla})`
    }
};

export default function ActualDay(props) {

    return (
        <Grid container className="grid__style--item" style={styles.gridContainer}>
            <Grid item container xs={12} 
            justifyContent="space-between" 
            spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{
                        border: 'solid',
                    }}>contenido</Box>
                </Grid>
                
                <Grid item container xs={2} justifyContent="center" >
                    <DailiesComponent></DailiesComponent>
                    <AvatarContainer data={props.current}></AvatarContainer>
                </Grid>
                <Grid item xs={12}>
                    <ActualInfo data={props.data} moon={props.moon}></ActualInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}