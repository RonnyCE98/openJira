import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from "./";
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
}

const UI_INITIAL_STATE: UIState={

    sideMenuOpens:false
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
    
    }}>
        {children}

    </UIContext.Provider>

    
  )
}
