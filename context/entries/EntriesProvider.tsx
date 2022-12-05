import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack'


export interface EntriesState{ 
    entries: Entry[];

}



const Entries_INITIAL_STATE: EntriesState={
    entries: []

}





export const EntriesProvider:FC <PropsWithChildren>= ({children}) => {


const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
const { enqueueSnackbar } = useSnackbar()


const addNewEntry= async (description:string)=>{
        /*const newEntry:Entry={
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }*/

        //En esta linea se lleva acabo la insercion. Este metodo llama al post
        //creado en api/entries/index. E inserta la entry.
        //Y si la entrada fue insertada con exito este la devuelve
        //para mostrala en pantalla
        const {data} = await entriesApi.post<Entry>('/entries',{description: description}) 

        //Se pasa la nueva entrada creada al evento [Entry] - Add-Entry
        //Esto le avisa a react que el estado cambio y por ende debe redibujar
        dispatch({type:'[Entry] - Add-Entry',payload:data});

}

//desestructuramos la descripcion, el id y el estatus. Para no pasar todo el objeto
//En palabras simples: "Pasamos las propiedades que nos interesa del objeto"

const updateEntry= async ({_id,description,status}:Entry)=>{

    try {

        const {data} = await entriesApi.put<Entry>(`/entries/${_id}`,{description,status}) 
        dispatch({type:"[Entry]-Entry-Updated",payload:data});
        enqueueSnackbar('Entrada actualizada',{
            variant:'success',
            autoHideDuration: 1500,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            } 

        })
    } catch (error) {
        console.log(error)
    }

}

//Obtenemos las entradas que estan en la base de datos
const refreshEntries= async()=>{
        //Como es una funcion asincrona se debe usar await    
      const {data}= await entriesApi.get<Entry[]>('/entries')
    
    dispatch({type:"[Entry]-Refresh-Data",payload:data});

}


const deleteEntry= async(id:string)=> {

    try {

        await entriesApi.delete(`/entries/${id}`) 
        refreshEntries();
    } catch (error) {
        console.log(error)
    }

}



//el [] se deja en blanco para que el useEffect solo se ejecute una vez
useEffect(() => {
    refreshEntries();
}, []);





return (
<EntriesContext.Provider value={{...state,
    addNewEntry,
    updateEntry,
    deleteEntry
    
}}>
    {children}</EntriesContext.Provider>
)
}