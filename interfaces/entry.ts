export interface Entry{
    _id:string;
    description:string;
    createdAt:number;
    status:EntryStatus;


}

/**Se usa type para definir un tipo de datos */
export type EntryStatus = "pending" | "in-progress"|"finished";