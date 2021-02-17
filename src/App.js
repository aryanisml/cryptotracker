import './App.css';
import React, { useEffect } from 'react';
import CryptoList from './components/CryptoList';
import SearchCrypto from './components/SearchCrypto';
import CryptoProvider from './hooks/CryptoProvider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    document.title = `Cryto Tracker`;
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CryptoProvider>
          <SearchCrypto />
          <CryptoList />
        </CryptoProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
