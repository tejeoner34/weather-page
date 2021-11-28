import { createTheme } from '@mui/material/styles';
import Typominecraft from '../../page/assets/fonts/MinecraftRegular-Bmg3.otf';
import TypominecraftBold from '../../page/assets/fonts/MinecraftBold-nMK1.otf';
import OrbitronLight from '../../page/assets/fonts/OrbitronLight-lqBq.otf';
import OrbitronBold from '../../page/assets/fonts/OrbitronBold-93z0.otf';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9DCED7',
            accent: '#AA6CD2',
            text: '#2C2233',
            secondaryText: '#F3F3F4',
            cardBG: '#E8F9FC',
            searchBG: '#C4C4C4',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily:[ '"Minecraft"',
        '"MinecraftBold"',
        '"OrbitronLight"',
        '"OrbitronBold"',
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
                @font-face {
                    font-family: 'MinecraftBold';
                    font-style: normal;
                    src: url('${TypominecraftBold}') format('opentype');
                    }
                    @font-face {
                        font-family: 'OrbitronLight';
                        font-style: normal;
                        src: url('${OrbitronLight}') format('opentype');
                        }
                        @font-face {
                            font-family: 'OrbitronBold';
                            font-style: normal;
                            src: url('${OrbitronBold}') format('opentype');
                            }
                    `,
        },
    },
});

export default theme



















