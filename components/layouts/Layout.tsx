import { Box } from "@mui/material"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { NavBar, SideBar } from "../ui"

interface Props{
    title?:string

}


export const Layout:FC<PropsWithChildren<Props>> = ({title,children}) => {
  /**sx: es como style pero tiene acceso al theme */
    return (
    <Box sx={{flexFlow:1}}>
            <Head>
                    <title>{title}</title>
            </Head>
            <NavBar/>
            <SideBar/>
            <Box sx={{padding:'10px 20px'}}>
                {children}
            </Box>


    </Box>
  )
}
