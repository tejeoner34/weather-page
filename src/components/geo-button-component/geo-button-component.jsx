import geoLogo from './geo-logo.png';
import Button from '@mui/material/Button';

export default function GeoButton(props) {



    return (
        <Button
            onClick={props.onSelectGeo}
            style={
                {
                    maxWidth: '33px',
                    maxHeight: '33px',
                    minWidth: '33px',
                    minHeight: '33px',
                    borderRadius: 0,

                }}
            sx={
                {
                    border: 2,
                    backgroundColor: 'primary.accent',
                    "&:hover": { backgroundColor: 'primary.accent' },
                    borderColor: 'primary.cardBG',
                    boxShadow: 6,

                }}
            variant="contained"><img src={geoLogo} /></Button>
    )
}