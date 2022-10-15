import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const NavBar = () => {
  return (
    <AppBar position="sticky" >
        <Toolbar>
            <IconButton>
                    <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant="h6">
                Open-Jira
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
