import { EntriesState } from './';


type EntriesActionType = 
   | { type: '[Name] - ActionName' } 


export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {
      case '[Name] - ActionName':
         return {
            ...state,
          }

       default:
          return state;
   }

}
