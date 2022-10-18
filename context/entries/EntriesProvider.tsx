import { FC, PropsWithChildren, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState{ 
    entries: Entry[];

}



const Entries_INITIAL_STATE: EntriesState={
    entries: [
        {
            _id:uuidv4(),
            description:"algo",
            status:'pending',
            createat:Date.now(),
        },
        {
            _id:uuidv4(),
            description:"algo2",
            status:'in-progress',
            createat:Date.now()-1000000,
        },
        {
            _id:uuidv4(),
            description:"algo3",
            status:"finished",
            createat:Date.now()-3000000,
        }

    ]

}



export const EntriesProvider:FC <PropsWithChildren>= ({children}) => {
const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

return (
<EntriesContext.Provider value={{...state}}>{children}</EntriesContext.Provider>
)
}