import { Company } from "../beans/Company";

export interface IUser {
    name:string;
    email:string;
    password:string;
    //company_id:Company;
    createdAt:Date;
}
