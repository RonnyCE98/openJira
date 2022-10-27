import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database';
import { EntryModelDB } from '../../models';

// Este archivo es para desarrollo

type Data = {
    message: string
}



export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    //Si estamos en produccion esta API no debe llamarse ya purgaria la base de datos
    if(process.env.NODE_ENV==="production"){
        return res.status(401).json({ message: 'No tiene acceso a este servicio' });

    }

    await db.connectDB();

    //en este espacio se hace peticiones a la base de datos
    //Borra la toda la coleccion de la base de datos
    console.log("Borrando datos");
    await EntryModelDB.deleteMany();

    //Inserta los datos
    console.log("Insertando datos");
    await EntryModelDB.insertMany(seedData.entries);
    await db.disconnectDB();


    res.status(200).json({ message: 'Proceso realizado correctamente' })
}