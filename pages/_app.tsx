import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { darkTheme, lightTheme } from '../themes';



function MyApp({ Component, pageProps }: AppProps) {
  /**Se le indica el tema que quiero que se aplique a todo el documento 
   * <CssBaseline/> para que estanderize
   * 
  */
  return (
    <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Component {...pageProps} />

    </ThemeProvider>
    

  ) 
}

export default MyApp
