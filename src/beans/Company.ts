
import {ICompany} from '../Interfaces/ICompany';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import {User} from './User';

@Entity()
export class Company implements ICompany {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    cnpj!: string;

    @Column()
    phone!: string;

    @Column()
    email!: Date;

    @CreateDateColumn({type: "timestamp"})
    createdAt!: Date;

    @ManyToOne(_type => User, user => user.company_id)
    userOwner_id!: User;
}