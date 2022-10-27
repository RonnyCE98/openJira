
/**
 * Este archivo es para cargar informacion en la base de datos
 * para desarrollo
 * 
 */


//Estos datos tienes las mismas propiedades que se definieron
//models Entry donde se creo el schema
//Datos de prueba
export const seedData={
    entries:[
        {
    
            description:"Pendiente:",
            status:"pending",
            createat:Date.now(),
        },
        {

            description:"En progreso:",
            status:"in-progress",
            createat:Date.now()-1000000,
        },
        {

            description:"Terminado:",
            status:"finished",
            createat:Date.now()-3000000,
        }

    ]

}


