import { Typography } from '@mui/material'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
      /**Le decimos que use el color primario de la paleta de colores que se definio en themes */
        <Typography variant='h1' color='primary'>Hola Mundo</Typography>
  )
}

export default Home
