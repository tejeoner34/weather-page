import { ThemeProvider } from '@emotion/react';
import './App.css';
import MainContainer from './page/mainContainer';
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
