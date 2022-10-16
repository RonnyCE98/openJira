import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from "./";


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



export const UIProvider:FC <PropsWithChildren>= ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{sideMenuOpens:false}}>
        {children}

    </UIContext.Provider>

    
  )
}
