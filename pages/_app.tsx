import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { darkTheme, lightTheme } from '../themes';
import { UIProvider } from '../context/ui';



function MyApp({ Component, pageProps }: AppProps) {
  /**Se le indica el tema que quiero que se aplique a todo el documento 
   * <CssBaseline/> para que estanderize
   * 
  */
  return (
    //Se coloco aqui porque queremos que cualquier componente acceda al context y asi
    // sepa cuando el sidebar ha sido abierto. Y asi poder cambiar el
    // estado del mismo en cualquier lugar o sea cerrarlo o abrirlo
    <UIProvider>
    <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Component {...pageProps} />

    </ThemeProvider>
    </UIProvider>

  ) 
}

export default MyApp
