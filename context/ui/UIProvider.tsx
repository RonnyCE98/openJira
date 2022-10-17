import { Theme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from "./";
import { darkTheme } from '../../themes/';
/**
 * El almacena y da informacion
 * 
 */



/**
 * Aqui esta todo lo relacionado a los estados
 * strings, boolean, etc
 */
export interface UIState{
    sideMenuOpens: boolean;
    themeColor: Theme;
}

const UI_INITIAL_STATE: UIState={

    sideMenuOpens:false,
    themeColor:darkTheme
}

/**
 * Se encarga de 
 * proporcionar el contexto a cualquier componente
 */

export const UIProvider:FC <PropsWithChildren>= ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  {/**El proveedor siempre debe retornar un valor
    En este caso se le da el valor 'sideMenuOpens:false'
*/}


  const openSideMenu=() =>{
    dispatch({type:'UI-Open Sidebar'});

  }
  const closeSideMenu=() =>{
    dispatch({type:'UI-Close Sidebar'});

  }

  const setDarkTheme=() =>{
    dispatch({type:'UI-Dark Theme'});

  }
  const setLightTheme=() =>{
    dispatch({type:'UI-Light Theme'});

  }



  {/**Le pasamos el state que se creo en uiReducer con su UI_INITIAL_STATE 
      para que React sepa cuando se debe redibujar
  */}
  return (
   
    <UIContext.Provider value={{ ...state, //(state es igual al valor de sideMenuOpens que por su UI_INITIAL_STATE es false)
      //De la misma forma se pone state por lo estados del uiReducer
      //Methods. Deden estar definidos en el contexto
      //Toda informacion o metodos que quiero compartir a otros componentes
      //Deben estar definidos en el contexto
      openSideMenu,
      closeSideMenu,
      setDarkTheme,
      setLightTheme,
    
    }}>

        {/**Como no puede haber nada mas arriba del _app.
         * Puse el tema en UIProvider ya que esta un nivel por debajo de _app
         * Y abarca toda las demas paginas
         * 
         */}
        <ThemeProvider theme={state.themeColor}>{children}</ThemeProvider>

    </UIContext.Provider>

    
  )
}
