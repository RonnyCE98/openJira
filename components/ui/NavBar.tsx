import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from "react";
import { UIContext } from "../../context/ui";
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
export const NavBar = () => {
  const {openSideMenu,themeColor,setDarkTheme,setLightTheme} = useContext(UIContext);
  


  return (
    <AppBar position="sticky" >
        <Toolbar>
            <IconButton
              onClick={openSideMenu}
            
            >
                    <MenuOutlinedIcon/>
            </IconButton>

            <IconButton
              onClick={setDarkTheme}
            
            >
                    <NightlightRoundOutlinedIcon/>
            </IconButton>

            <IconButton
                   onClick={setLightTheme}
            
              >
                      <Brightness7OutlinedIcon/>
              </IconButton>

            <Typography variant="h6">
                Open-Jira
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
