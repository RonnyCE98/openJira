import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'


const Home: NextPage = () => {
  return (
      <Layout >
        {/*Le decimos que use el color primario de la paleta de colores que se definio en themes */} 
        <Typography variant='h1' color='primary'>Hola Mundo</Typography>
      


      </Layout>


     
  )
}

export default Home
