/**
 * Se utiliza para mantener el estado de la aplicacion
 * Es como un useState pero mas complejo
 * Recibe algo y produce algo
 */

import { UIState } from "./";

// retorna UIState

//Se defeinen las acciones que el reducer va a manejar 
//se pueden definir N acciones
type UiActionType =
| {type:'UI-Open Sidebar'}
| {type:'UI-Close Sidebar'}

/**
 * El reducer solo recibe esos 2 argumentos y nada mas.
 * No debe tener acceso a informacion externa
*/

//Se le define el tipo
export const uiReducer = (state:UIState,action:UiActionType):UIState => {   
    /**
     * Como se va recibir diferentes tipo de acciones
     * Se usa un switch para saber que tipo de accion va
     * a ser procesada y se regresa un nuevo estado.
     * 
     */
    switch (action.type) {
        case 'UI-Open Sidebar':
            return{
                ...state,
                sideMenuOpens:true,
            }
            

        case 'UI-Close Sidebar':
            return{
                ...state,
                sideMenuOpens:false,
            }    
    
        default:
            return state;
    }
  
}


