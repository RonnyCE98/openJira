export interface Entry{
    _id:string;
    description:string;
    createat:number;
    status:EntryStatus;


}

/**Se usa type para definir un tipo de datos */
export type EntryStatus = 'pending' | 'in-progress'|'finished';