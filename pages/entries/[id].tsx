import { capitalize,Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material'
import React, { ChangeEvent,useState } from 'react'
import { Layout } from '../../components/layouts'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { EntryStatus } from '../../interfaces';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Status } from '../../models/Entry';

const validStatus: EntryStatus[]=['pending','in-progress','finished'];



export const EntryPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);
  
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

export default EntryPage