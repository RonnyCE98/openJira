import { FC, PropsWithChildren, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState{ 
    entries: Entry[];

}



const Entries_INITIAL_STATE: EntriesState={
    entries: []

}



export const EntriesProvider:FC <PropsWithChildren>= ({children}) => {


const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

const addNewEntry=(description:string)=>{
        const newEntry:Entry={
            _id: uuidv4(),
            description: description,
            createat: Date.now(),
            status: 'pending'
        }

        //Se pasa la nueva entrada creada al evento [Entry] - Add-Entry
        //Esto le avisa a react que el estado cambio y por ende debe redibujar
        dispatch({type:'[Entry] - Add-Entry',payload:newEntry});

}

const updateEntry=(entry:Entry)=>{
    dispatch({type:"[Entry]-Entry-Updated",payload:entry});

}

return (
<EntriesContext.Provider value={{...state,
    addNewEntry,
    updateEntry,
}}>
    {children}</EntriesContext.Provider>
)
}