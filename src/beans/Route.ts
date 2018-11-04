
import {IRoute} from '../Interfaces/IRoute';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import {User} from './User';
import { Company } from './Company';

@Entity()
export class Route implements IRoute {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    origin!: string;

    @Column()
    destination!: string;

    @Column()
    departureTime!: Date;

    @Column()
    arrivalTime!: Date;

    @Column()
    distance!: number;

    @CreateDateColumn({type: "timestamp"})
    createdAt!: Date;

    @ManyToOne(_type => Company, company => company.routes)
    company!: Company;

    @ManyToOne(_type => User, user => user.routes)
    user!: User;
}