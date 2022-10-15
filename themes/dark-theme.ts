import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

/**
 * Se define la paletad de colores
 * 
 */
export const darkTheme=createTheme({
    palette:{
       mode:'dark',
        secondary:{
            main:'#19857b'
        },
        error:{
            main: red.A400
        },
       
    },
     /**Permite cambiar todos los elementos de materials 
      * Estanderizar como se ve algo
     */
    components:{
        MuiAppBar:{
            defaultProps:{
                elevation:0

            },
            styleOverrides:{
                root:{
                    backgroundColor:'#4a148c'
                }
            }
        }
    
    }
 
 });