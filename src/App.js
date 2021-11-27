import { ThemeProvider } from '@emotion/react';
import './App.css';
import MainContainer from './page/mainContainer';
import theme from './components/theming';
import { CssBaseline } from '@mui/material';
import MetricProvider from './context/metric-provider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MetricProvider value='metric'>
      <MainContainer>

      </MainContainer>
      </MetricProvider>
      </ThemeProvider>
  );
}

export default App;
