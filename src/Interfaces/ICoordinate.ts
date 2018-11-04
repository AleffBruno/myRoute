import { Route } from "../beans/Route";

export interface ICoordinate {
    latitude:string;
    longitude:string;
    cellphoneDate:string;
    gpsDate:Date;
    source:Date;
    accuracy:number;
    battery:Date;
    route:Route;
}