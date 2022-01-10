import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppContainer } from "./components/Container";

export function App({children}: any) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light); 

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <AppContainer>
          {children}
        </AppContainer>
        <Footer />
      </ThemeProvider>
    </>
  )
}
