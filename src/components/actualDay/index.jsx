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
        <Grid container style={styles.gridContainer}   justifyContent="space-between" flexDirection="row">
            <Grid item container xs={12} 
            justifyContent="space-between" 
            flexDirection="row"
            spacing={2}
            sx={{marginTop:'1em', marginLeft:'1em', marginRight:'1em'}}>
                <Grid container item  xs={3} justifyContent="start" flexDirection="column"  rowGap={3} > 
                    <Box
                    sx={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign:'center',
                        justifyContent:"center",
                        backgroundColor: '#FDECF2B5',
                        typography:'p',
                        color:'text',
                        fontFamily:'Minecraft',
                        fontSize: '18px',
                      

                    }}
                    >Viernes 13 de agosto</Box>
                    <Box
                    sx={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign:'center',
                        justifyContent:"center",
                        backgroundColor: '#FDECF2B5',
                        typography:'p',
                        color:'text',
                        fontFamily:'Minecraft',
                        fontSize: '96px'
                    }}
                    >30º</Box>
                </Grid>
                
                <Grid item container xs={2} justifyContent="space-between" alignItems='center' flexDirection='column' rowGap={18} >

                    <Grid item container justifyContent="space-between"  flexDirection='column' rowGap={2}>
                        <DailiesComponent data={props.data}></DailiesComponent>
                    </Grid>
                    <Grid item >
                        <AvatarContainer data={props.current}></AvatarContainer>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <ActualInfo data={props.data} moon={props.moon}></ActualInfo>
                </Grid>
            </Grid>
        </Grid>
    )
}