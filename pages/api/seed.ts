import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database';


type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    //Si estamos en produccion esta API no debe llamarse ya purgaria la base de datos
    if(process.env.NODE_ENV==="production"){
        return res.status(401).json({ message: 'No tiene acceso a este servicio' });

    }
    await db.connectDB;
    console.log("Algo");

    //en este espacio se hace peticiones a la base de datos
    await db.disconnectDB;


    res.status(200).json({ message: 'Proceso realizado correctamente' })
}