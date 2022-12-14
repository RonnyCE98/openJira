import { capitalize,Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import React, { ChangeEvent,FC,useContext,useState } from 'react'
import { Layout } from '../../components/layouts'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Entry, EntryStatus } from '../../interfaces';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useMemo } from 'react';


const validStatus: EntryStatus[]=['pending','in-progress','finished'];

interface Props{
    entry:Entry

}

export const EntryPage:FC<Props> = ({entry}) => {
   const {updateEntry,deleteEntry} = useContext(EntriesContext)
   const router = useRouter()
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValued = useMemo(()=>inputValue.length<=0 && touched,[inputValue,touched])
  const onInputChanged=(event:ChangeEvent<HTMLInputElement>)=>{
         setInputValue(event.target.value); 
  }

  const onStatusChanged=(event:ChangeEvent<HTMLInputElement>)=>{
        setStatus(event.target.value as EntryStatus);

  }


  const onDelete=()=>{
        deleteEntry(entry._id);

        router.push('/');
  }

  const onSave=()=>{
        //Si el input value es igual a cero no actualizo
        if (inputValue.trim().length===0){
            return; 
        }

        const updatedEntry:Entry={
            ...entry,
            status:status,
            description:inputValue

        }

        updateEntry(updatedEntry)

    }



  

  return (
    <Layout title= {inputValue.substring(0.20) +'.......'}>
        <Grid
            container
            justifyContent='center'
            sx={{MarginTop:2}}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader
                        title={`Entrada: ${inputValue}`}
                        subheader={`Creada hace`}

                    />
                    <CardContent>
                        <TextField
                            sx={{marginTop:2, marginBottom:1}}
                            fullWidth
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label='Actualizar entrada'
                            value={inputValue}
                            onChange={onInputChanged}
                            helperText={isNotValued && "Ingrese un valor" }
                            error={isNotValued}
                            onBlur={()=>setTouched(true)}
                        
                        />
                        {/**Radio */}
                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup
                                row
                                value={status}
                                onChange={onStatusChanged}

                            >
                               {
                                    validStatus.map(option=>(
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio/>}
                                            label={capitalize(option)}
                                            
                                        />

                                    ))


                               }
                                
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    {/**Espacio para botones */}
                    <CardActions>
                        <Button
                            startIcon={<EditOutlinedIcon/>}
                            variant="contained"
                            fullWidth
                            onClick={onSave}
                            disabled={inputValue.length<=0}
                        >
                            Save
                        </Button>

                    </CardActions>

                  
                </Card>

            </Grid>


        </Grid>
        <IconButton 
            onClick={onDelete}
            sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'red',
           
        }}>
            <DeleteOutlineOutlinedIcon/>

        </IconButton>



    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {id}= params as {id:string};
    console.log(id);
    //Obtenemos el id de la url y se valida si es un ID valido en moongose
    //Se le pasa  a "EntryPage" por medio de las props
    const entry=await dbEntries.getEntryById(id);



    if(!entry){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }

        }
    }
    return {
        props: {
            entry
        }
    }
}

export default EntryPage