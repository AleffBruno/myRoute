import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Route } from "./Route";

@Entity()
export class Coordinate {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal", { precision: 5, scale: 2 })
    latitude!: number;

    @Column("decimal", { precision: 5, scale: 2 })
    longitude!: number;

    @Column()
    cellphoneDate!: Date;

    @Column()
    gpsDate!: Date;

    @Column()
    source!: string;

    @Column()
    accuracy!: number;

    @Column()
    battery!: string;

    @ManyToOne(_type => Route, route => route.coordinates)
    route!: Route;
}