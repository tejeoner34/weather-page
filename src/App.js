import { ThemeProvider } from '@emotion/react';
import './App.css';
import MainContainer from './page/mainContainer';
import theme from './components/theming';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MainContainer>

      </MainContainer>
      </ThemeProvider>
  );
}

export default App;
