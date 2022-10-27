import mongoose,{Model,Schema} from 'mongoose';
import { Entry } from '../interfaces';

//Para obtenga las mismas propiededaes de Entry
// Y se pude aniadir nuevas propiedades a IEntry
interface IEntry extends Entry{
}

export enum Status {
   'pending',
   'in-progress',
   'finished'
}

//Se define las propiedades que los documentos van a tener
const entrySchema = new Schema({
    description:{type:String,require:true},
    createat:{type:Number},
    status:{
        type: String,
        enum:Status
    }
});

/*El backend se va estar eejcutnado dependiendo de los request que haga el
usuario. Por lo cual si ya esta definido este esquema yo no lo quiero volver a definir
*/

/**
 * Este linea se encarga de comprobar si el modelo existe y si no lo crea
 */

const EntryModel:Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);


export default EntryModel