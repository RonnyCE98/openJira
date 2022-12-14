import { Entry } from '../../interfaces';
import { EntriesState } from './';



/**
 * Todos los actions contienen una propiedad type, que identifica el tipo de evento que se realizará. Opcionalmente, 
 * pueden incluir una propiedad payload, en caso de que neceisten enviar información para que se realice el cambio
 * 
 * Las acciones son el único mecanismo en Redux para enviar información a tu store.
   Son objetos simples que incluyen una propiedad type y pueden incluir otros campos con información adicional. 
   Muchas veces y por convención, a esa información adicional se le llama payload
 * 
 */
type EntriesActionType = 
   | { type: '[Entry] - Add-Entry',payload:Entry } 
   | { type: '[Entry]-Entry-Updated',payload:Entry } 
   | { type: '[Entry]-Refresh-Data',payload:Entry[] } 


export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {
      case '[Entry] - Add-Entry':
         return {
            //Se agrega la nueva entrada al arreglo entries
            //Refibe el estado.entries(Es el encaragado de almacenar el estado inicial) 
            //y la nueva entrada que esta en el action.payload
            ...state,
            entries:[...state.entries,action.payload]

          }
      case '[Entry]-Entry-Updated':
      return {
         ...state,
         entries:state.entries.map(entry=>{
               //Se actualiza si la entry es igual a la que le estoy haciedno drag and drop
               if(entry._id===action.payload._id){
                  entry.status= action.payload.status
                  entry.description=action.payload.description
               }
               return entry
         })
      }

      case '[Entry]-Refresh-Data': 
      return{
         ...state,
         //Aniade las nuevas entradas
         entries:[...action.payload]

      }



      default:
          return state;
   }

}
