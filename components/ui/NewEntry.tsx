import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { FormEntry } from './';
import { UIContext } from '../../context/ui';


export const NewEntry = () => {
  
 
    const{isAddingEntry,setIsAddingEntry}= useContext(UIContext);


  return (
    <Box sx={{marginBottom:2, paddingX:2}}>
        {
          isAddingEntry ?(
                <FormEntry />

          )
          :
          (
            <Button
            startIcon={<AddCircleOutlinedIcon/>}
            fullWidth
            variant='outlined'
            onClick={()=>setIsAddingEntry(true)}
           
            >
                Agregar tarea
            </Button>

          )

        }
 
    </Box>
  )
}
