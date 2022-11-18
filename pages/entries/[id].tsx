import { capitalize,Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import React, { ChangeEvent,FC,useState } from 'react'
import { Layout } from '../../components/layouts'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { EntryStatus } from '../../interfaces';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Status } from '../../models/Entry';
import { useMemo } from 'react';
import { GetStaticProps } from 'next'
import mongoose from 'mongoose';
const validStatus: EntryStatus[]=['pending','in-progress','finished'];

interface Props{

}

export const EntryPage:FC<Props> = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);
  const isNotValued = useMemo(()=>inputValue.length<=0 && touched,[inputValue,touched])
  const onInputChanged=(event:ChangeEvent<HTMLInputElement>)=>{
         setInputValue(event.target.value); 
  }

  const onStatusChanged=(event:ChangeEvent<HTMLInputElement>)=>{
        setStatus(event.target.value as EntryStatus);

  }

  const onSave=()=>{
        console.log(inputValue,status)
    }



  

  return (
    <Layout title='... ....'>
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
        <IconButton sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'red'
        }}>
            <DeleteOutlineOutlinedIcon/>

        </IconButton>



    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {id}= params as {id:string};
    console.log(id);
    //Obtenemos el id de la url y se valida si es un ID valido en moongose
    //Se le pasa  a "EntryPage" por medio de las props
    if(!mongoose.isValidObjectId(id)){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }

        }
    }
    return {
        props: {
            id
        }
    }
}

export default EntryPage