import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { FormEntry } from './';


export const NewEntry = () => {
    const [isAdding, setIsAdding] = useState(false);

    const addingTrue =()=>{

        setIsAdding(true);

    }

    //Creo una funcion que cambia el estado de isAdding
    //Esta funcion se la mando como props al componente FormEntry
    //Y se activa cada vez que se le hace click al boton cancelar
    // Y auque se active en entro componente esta funcion cambia el estado
    // de isAdding
    const setAddingFalse =()=>{

        setIsAdding(false);

    }


  return (
    <Box sx={{marginBottom:2, paddingX:2}}>
        {
          isAdding ?(
                <FormEntry setAddingFalse={setAddingFalse}/>

          )
          :
          (
            <Button
            startIcon={<AddCircleOutlinedIcon/>}
            fullWidth
            variant='outlined'
            onClick={()=>setIsAdding(true)}
           
            >
                Agregar tarea
            </Button>

          )

        }
 
    </Box>
  )
}
