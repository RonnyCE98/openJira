/**
 * Mongoose es una biblioteca de programación orientada a objetos de JavaScript que crea una conexión entre MongoDB 
 * y el entorno de tiempo de ejecución de JavaScript de Node.js.
 */

import mongoose from "mongoose";

/**
 * 0=Desconectado
 * 1=Conectado
 * 2=Conectando
 * 3=Desconectando
 */

//objeto
const mongoConnection={
    isConnected:0

}

export const connectDB=async ()=>{
    if(mongoConnection.isConnected===1){
        console.log("Ya estamos conectados");
        return;
    }

    if(mongoose.connections.length>0){
        mongoConnection.isConnected=mongoose.connections[0].readyState;
        if(mongoConnection.isConnected===1){
            //estamos reutilizando una conexion anterior
            return;

        }

        //Si no es uno nos desconectamos
        await mongoose.disconnect();

    }

    // espera a que se haga la conexion
    await mongoose.connect('...');
    mongoConnection.isConnected=1;


    
}   


export const disconnectDB=async ()=>{
    //ya estoy desconectado
    if(mongoConnection.isConnected!==0) return;


    await mongoose.disconnect();
    console.log("desconectado de la db")


}