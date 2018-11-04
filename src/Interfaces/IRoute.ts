import { Company } from "../beans/Company";
import { User } from "../beans/User";

export interface IRoute {
    name:string;
    origin:string;
    destination:string;
    departureTime:Date;
    arrivalTime:Date;
    distance:number;
    createdAt:Date;
    company:Company;
    user:User;
}