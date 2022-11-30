import mongoose from "mongoose";
import { json } from "stream/consumers";
import { db } from ".";
import { EntryModelDB, IEntry } from "../models";

export const getEntryById= async (id:string):Promise<IEntry | null> =>{
    if(!mongoose.isValidObjectId(id)){
       return null
    }

    await db.connectDB();
    //Lean trae la informacion minima para trabajar
    const entry = await EntryModelDB.findById(id).lean();
    await db.disconnectDB();
    //Se debe serializar ya que por el momento  findById no lo devuelve serializado
    return JSON.parse(JSON.stringify(entry));
}