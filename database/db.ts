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

export const connectDB= async()=>{
   
 
    if(mongoConnection.isConnected===1){
         console.log(await "Ya estamos conectados");
        return mongoConnection.isConnected;
    }

    if(mongoose.connections.length>0){
        mongoConnection.isConnected=mongoose.connections[0].readyState;
        if(mongoConnection.isConnected===1){
            //estamos reutilizando una conexion anterior
            return mongoConnection.isConnected;

        }

        //Si no es 1 nos desconectamos
        await mongoose.disconnect();

    }

    // espera a que se haga la conexion
    await mongoose.connect(process.env.MONGO_DB|| " ") ;
    mongoConnection.isConnected=1;
   
    console.log( "Conenctando a MongoDB",process.env.MONGO_DB);


    
}   


export const disconnectDB=async ()=>{
   
    if(process.env.NODE_ENV==="development"){
        return ;

    }



    //ya estoy desconectado
    if(mongoConnection.isConnected!==0) {
        await mongoose.disconnect();
        console.log("desconectado de la db");


    }else{
       //Si es igual a cero ya estoy desconectado
        return;
    }
  


}