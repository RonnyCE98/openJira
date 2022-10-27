//Este Restfull api obtiene las entradas


import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { EntryModelDB, IEntry } from '../../../models';
import async from '../seed';

type Data = 
    |{message: string}
    //Le decimos que Data puede ser un arreglo de entradas
    |IEntry[]


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            
            return getEntries(res)
    
        default:
            
    res.status(400).json({ message: 'Endponint no existe' })
    }



}


const getEntries=async(res:NextApiResponse<Data>)=>{

    await db.connectDB();
    const entries = await EntryModelDB.find().sort({createdAt:'ascending'});

    await db.disconnectDB();
    res.status(200).json(entries)


}