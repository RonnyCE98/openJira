//Este Restfull api obtiene las entradas


import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';

import { EntryModelDB, IEntry } from '../../../models';
import async from '../seed';

type Data = 
    |{message: string}
    //Le decimos que Data puede ser un arreglo de entradas
    |IEntry[]
    |IEntry


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            
            return getEntries(res)

        case 'POST':
            return postEntry(req,res)

       
    
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


const postEntry=async(req: NextApiRequest,res:NextApiResponse<Data>)=>{
    //Extraemos la informacion que necesitamos del body
    //
    const{description}=req.body;

    const newEntry= new EntryModelDB({
        description: description,
        createdAt:Date.now(),
    })


    try {
        await db.connectDB();
        //Esto hace la insercion en la base de datos y tambien las validaciones
        await newEntry.save();
        await db.disconnectDB();
        return  res.status(201).json(newEntry);

        
    } catch (error) {
        await db.disconnectDB();
        console.log(error);
        return res.status(500).json({ message: 'Algo salio mal, revisar la consola' })
        
    }

    


}