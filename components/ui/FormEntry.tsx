import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props{
    
     setAddingFalse:()=>void

}


export const FormEntry:FC<Props> = ({setAddingFalse}) => {

    const [inputValue, setInputValue] = useState('')
    //Obtenemos la funcion del contexto
    const {addNewEntry} = useContext(EntriesContext);

    //Esto para que se valide el texto escrito por el usuario
    //una vez que el cursor ha salido del area del input
    const [touched, setTouched] = useState(false)
    //U truco para saber el evento. Es poner event:number o cualquier tipo de dato
    // Entonces  onChange={onTextFieldChanged} va a marcar error y  va indicar el evento que se espera
    //Esta funcion es para ver lo que se esta escribiendo y capturarlo en inputValue
    const onTextFieldChanged=(event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value)
        

    }


    const onSave=()=>{
            if(inputValue.length===0) return;
            addNewEntry(inputValue);

    }


  return (
            <>
                    
                <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                helperText={inputValue.length<=0 && touched && "Ingrese un valor" }
                value={inputValue}
                onChange={onTextFieldChanged}
                error={inputValue.length<=0 && touched}
                onBlur={()=>setTouched(true)}
                
                
                />
                
                <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}

                        >
                            Guardar
                        </Button>

                        <Button
                            variant='outlined'
                            onClick={setAddingFalse}
                        >
                            Cancelar
                        </Button>
                </Box>
                
            </>
  )
}
