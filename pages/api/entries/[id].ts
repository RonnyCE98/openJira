import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { EntryModelDB, IEntry } from '../../../models';
import { db } from '../../../database';


type Data = |{message: string}
            |IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    //Se destructura el id de la query. O se le saca el argumentoo id de ella.
    // req.query puede ser visto como un arreglo de en el cual estan 
    //todos lo argumentos de la url
    //Siempte el valor que retorna es string.
    const {id} = req.query;
    //se revisa que sea un id valido de mongo
    //ante de enviar la query a la base de datos.
    if(!mongoose.isValidObjectId(id)){
        res.status(400).json({message:'El id no es valido'})
    }
    switch (req.method) {
   

        case 'PUT':
            return updateEnrty(req,res)
        case 'GET':
            return getEnrty(req,res)

        case 'DELETE':
            return deleteEnrty(req,res)
        default:
            res.status(400).json({ message: 'Endponint no existe' })
    }

    


   
}

const updateEnrty=async(req: NextApiRequest,res:NextApiResponse<Data>)=>{
  
        const {id} = req.query;
        await db.connectDB();
      
        const entryToUpdate= await EntryModelDB.findById(id);
        if(!entryToUpdate){
            await db.disconnectDB();
            return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id});
        }

        //Si entan vacios utilizo los de entryToUpdate
        const{
            description=entryToUpdate.description,
            status=entryToUpdate.status

        } = req.body;
        
        try {
     //Se actualiza los valores de la entrada
        // runValidators para que valide que solo se haya insertado valores permitidos
        // new para que retorne la entrada con los valores modificados
        const updatedEntry = await EntryModelDB.findByIdAndUpdate(id,{description,status},{runValidators:true,new:true})
        await db.disconnectDB();
        //Se coloca ! para decir que la variable nunva va a ser nula
        return res.status(200).json(updatedEntry!);
            
        } catch (error) {
            console.log(error);
            await db.disconnectDB();
            return res.status(400).json({ message: 'Algo salio mal, revisar la consola' })
        }
        
}


const getEnrty=async(req: NextApiRequest,res:NextApiResponse<Data>)=>{
  
    const {id} = req.query;
    await db.connectDB();
  
    const entryToGet= await EntryModelDB.findById(id);
    if(!entryToGet){
        await db.disconnectDB();
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id});
    }
    await db.disconnectDB();
    //Se coloca ! para decir que la variable nunva va a ser nula
    return res.status(200).json(entryToGet!); 
}

const deleteEnrty=async(req: NextApiRequest,res:NextApiResponse<Data>)=>{
  
    const {id} = req.query;


    try {
        await db.connectDB();
        await EntryModelDB.findByIdAndDelete(id);
        await db.disconnectDB();
        return res.status(200).json({message: 'Entrada con el ID: ' + id + ' borrada'}); 
    } catch (error) {
        console.log(error);
        await db.disconnectDB();
        return res.status(400).json({ message: 'Algo salio mal, revisar la consola' })
    }
    
}