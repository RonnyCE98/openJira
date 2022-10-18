import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from '../../interfaces/';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/';

//Recordad que EntryStatus es un tipo de dato que creamos
interface Props{
  status:EntryStatus;

}


export const EntryList:FC<Props> = ({status}) => {

  //Obtengo el arreglo de entradas
  const {entries} = useContext(EntriesContext)

  //Devuelve un arreglo con las entradas que tienen el status ilgual
  // al que se recibe por parametro

  //useMemo memoriza las entradas ya que si valor no cambia muy seguido
  // Y solo se vuelven a memorizar si estas cambian
  const entriesByStatus= useMemo(()=>entries.filter(entries=>entries.status===status),entries);  
  
  ;
  return (
    //SE usa un div para poder hacaer un drop
    <div>
        <Paper sx={{height:'calc(100vh - 250px)', overflow:'scroll', padding:'1px 10px',background:"grey"}}>
            {/**Cambia si se esta haciendo drag o no */}
            <List sx={{opacity: 1 }}>
               {
                entriesByStatus.map(entry=>(
                  //El key le sirve a react para saber si el componente ha cambiado
                 <EntryCard key={entry._id} entry={entry}/>

                ))

               }
               
              
            </List>

        </Paper>


    </div>
  )
}
