import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppContainer } from "./components/Container";

export function App({children}: any) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <AppContainer>
        {children}
      </AppContainer>
      <Footer />
    </>
  )
}
