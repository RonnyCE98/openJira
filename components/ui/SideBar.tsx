import { Box, Drawer, List, ListItem, ListItemIcon, Typography,ListItemText, Divider } from "@mui/material";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const menuItems:string[]=['Inbox','Starred','Send Email','Drafts']

export const SideBar = () => {
  return (
    <Drawer
    anchor="left"
    open={true}
    onClose={()=>console.log('cerrando')}
    >
        <Box sx={{width:250}}>
            {/*Es como un div*/}
            <Box sx={{padding:"5px 10px"}}>
                <Typography variant='h4'>
                    Menu
                </Typography>
                
            </Box>

            <List>
                    {
                        menuItems.map((text,index)=>(
                                <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index%2? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/> }
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>

                                </ListItem>

                        ))
                    }


            </List>
            {/*Crea linea de separacion */}
            <Divider/>
            <List>
                    {
                        menuItems.map((text,index)=>(
                                <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index%2? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/> }
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>

                                </ListItem>

                        ))
                    }


            </List>

        </Box>

     
    </Drawer>
  )
}
