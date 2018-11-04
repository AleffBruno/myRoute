import { User } from "../beans/User";

export interface ICompany {
    name:string;
    cnpj:string;
    phone:string;
    email:string;
    createdAt:Date;
    //userOwner_id:User[];
}