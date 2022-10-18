import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"

export const EntryList = () => {
  return (
    //SE usa un div para poder hacaer un drop
    <div>
        <Paper sx={{height:'calc(100vh - 250px)', overflow:'scroll', padding:'1px 10px',background:"grey"}}>
            {/**Cambia si se esta haciendo drag o no */}
            <List sx={{opacity: 1 }}>
               <EntryCard/>
               <EntryCard/>
               <EntryCard/>
            </List>

        </Paper>


    </div>
  )
}
