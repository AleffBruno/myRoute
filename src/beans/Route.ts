
import {IRoute} from '../Interfaces/IRoute';
import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Route implements IRoute {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    origin!: string;

    @Column()
    //@IsEmail()
    destination!: string;

}