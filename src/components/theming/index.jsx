import { createTheme } from '@mui/material/styles';
import Typominecraft from '../../page/assets/fonts/MinecraftBold-nMK1.otf';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(165 201 186)',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily:[ '"Minecraft"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing: (factor) => {
        console.log(factor)
        return `${0.25 * factor}rem`
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'Minecraft';
                font-style: normal;
                src: url('${Typominecraft}') format('opentype');
                }
                @font-face`,
        },
    },
});

export default theme