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
                    elevation:2

                }}
            sx={
                {
                    border: 2,
                    backgroundColor: 'primary.accent',
                    "&:hover": { backgroundColor: 'primary.accent' },
                    borderColor: 'primary.cardBG',
                    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.25), 1px 1px 2px rgba(0, 0, 0, 0.84), inset 4px 3px 4px rgba(255, 255, 255, 0.33)'

                }}
            variant="contained"><img src={geoLogo} alt='geologo' /></Button>
    )
}