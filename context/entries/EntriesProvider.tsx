import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../apis';


export interface EntriesState{ 
    entries: Entry[];

}



const Entries_INITIAL_STATE: EntriesState={
    entries: []

}

interface EntriesData{
    dataEntries: Entry[];
}



export const EntriesProvider:FC <PropsWithChildren>= ({children}) => {


const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

const addNewEntry=(description:string)=>{
        const newEntry:Entry={
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        //Se pasa la nueva entrada creada al evento [Entry] - Add-Entry
        //Esto le avisa a react que el estado cambio y por ende debe redibujar
        dispatch({type:'[Entry] - Add-Entry',payload:newEntry});

}

const updateEntry=(entry:Entry)=>{
    dispatch({type:"[Entry]-Entry-Updated",payload:entry});

}

//Obtenemos las entradas que estan en la base de datos
const refreshEntries= async()=>{
    const {data}= entriesApi.get<Entry[]>('/entries');
    dispatch({type:"[Entry]-Refresh-Data",payload:dataEntries});

}



//el [] se deja en blanco para que el useEffect solo se ejecute una vez
useEffect(() => {
    refreshEntries();
}, []);





return (
<EntriesContext.Provider value={{...state,
    addNewEntry,
    updateEntry,
}}>
    {children}</EntriesContext.Provider>
)
}