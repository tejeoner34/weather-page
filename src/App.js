import { ThemeProvider } from '@material-ui/styles';
import { Fragment } from 'react';
import './App.css';
import MainContainer from './components/mainContainer';
import theme from './components/theming';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>

      </MainContainer>
      </ThemeProvider>
  );
}

export default App;
