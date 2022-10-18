import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";


export const lightTheme=createTheme({
    palette:{
        mode:'light',
        background:{
         default: grey[300],
         
        },
        primary:{
             main:'#90caf9'
         },
         secondary:{
             main:'#757ce8'
         },
         error:{
             main: red.A400
         }
         
 
     },
     components:{
        MuiAppBar:{
            defaultProps:{
                elevation:0

            },
            styleOverrides:{
              
            }
        }
    
    }
 });