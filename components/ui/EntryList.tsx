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

  //Obtengo el arreglo de entradas del EntriesContext
  const {entries} = useContext(EntriesContext)

  //Devuelve un arreglo con las entradas que tienen el status ilgual
  // al que se recibe por parametro

  //useMemo memoriza las entradas ya que valor no cambia muy seguido
  // Y solo se vuelven a memorizar si estas cambian

/**
 * 

Un poco sobre memoización
Memoizar significa memorizar un valor para evitar procesarlo nuevamente, 
generalmente se usa para ahorrarte el costo de producir un valor una y otra vez.
useMemo
Esta función es un hook de React que sirve para memoizar el valor que devuelve una función. 
La función useMemo acepta dos argumentos y retorna un valor.
El primer argumento es la función y el segundoes una variable a vigilar, 
de manera que no se generará un nuevo valor mientras esa variable no cambie.

 */

/**
 * El método filter crea un nuevo arreglo con todos los elementos que cumplan la condición dada, dicho en otras palabras, 
 * cuando iteramos un arreglo y queremos seleccionar cada el elemento que cumpla con la condición dada.
 */

//En esencia lo que se esta haciendo es extrar las entries las cuales su estatus es 'pending' | 'in-progress'|'finished'
//Y este estatus viene como parametro del componente en index
//Asi el puede clasificar por estado y mostrarlas en el lugar correcto
//
  const entriesByStatus= useMemo(()=>entries.filter(entries=>entries.status===status),[entries]);  
  
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
