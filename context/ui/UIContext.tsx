import { Theme } from '@mui/material';
import { createContext } from 'react';
	/**
    * Context provee una forma de pasar datos a través del árbol de componentes 
    * sin tener que pasar props manualmente en cada nivel.
    En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) 
    a través de props, pero esta forma puede resultar incómoda para ciertos tipos de props 
    (por ejemplo, localización, el tema de la interfaz) que son necesarias 
    para muchos componentes dentro de una aplicación. Context proporciona una forma 
    de compartir valores como estos entre componentes sin tener que pasar 
    explícitamente una prop a través de cada nivel del árbol.
    * 
    */

/**
 * Son la properties de este componente
 * 
 */    
interface ContextProps{
    themeColor: Theme;
    
    sideMenuOpens: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setLightTheme: () => void;
    setDarkTheme: () => void;

}

export const UIContext=createContext({} as ContextProps);