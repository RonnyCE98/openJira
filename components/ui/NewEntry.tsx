import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
export const NewEntry = () => {
  return (
    <Box sx={{marginBottom:2, paddingX:2}}>
        <Button
            startIcon={<AddCircleOutlinedIcon/>}
            fullWidth
            variant='outlined'

        >

            Agregar tarea
        </Button>


        <TextField
            fullWidth
            sx={{marginTop:2, marginBottom:1}}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText="Ingrese un valor"
        />


      

        <Box display='flex' justifyContent='space-between'>
            <Button 
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlinedIcon/>}

            >
                Guardar
            </Button>
         
            <Button 
                variant='outlined'
            >
                Cancelar
            </Button>


        </Box>
      
    </Box>
  )
}
