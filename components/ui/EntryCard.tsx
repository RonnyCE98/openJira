import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { DragEvent, FC, useContext } from 'react';
import { Entry } from '../../interfaces/';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';




interface Props{
  entry:Entry,
 

}


export const EntryCard:FC<Props> = ({entry}) => {


  const {startDragging,endDragging} = useContext(UIContext)
  const router = useRouter()
  
  //para obtener informacion del elemento que esta haciedno drag
  const dragStart=(event:DragEvent<HTMLDivElement>)=>{
    //Para obtenr el id de la entrada que esta haceidno drag
    event.dataTransfer.setData('id',entry._id)
      //modificar estado para indicar que estoy haciendo drag
      startDragging();


    }

    const dragEnd=(event:DragEvent<HTMLDivElement>)=>{
      endDragging();
    }

   
    const onClick=()=>{
        router.push(`/entries/${entry._id}`)


    }

    const date=entry.createdAt;


  return (
    <Card
      sx={{marginBottom:1}}
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onClick={onClick}
    >
        <CardActionArea>
            <CardContent>
              <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>

            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'end', paddingRight:2}}>
            <Typography variant='body2' >
              {/*dateFunctions.getFormarDistanceToNow(date)*/ date}
            </Typography>
            </CardActions>

        </CardActionArea>
      
    </Card>
  )
}
