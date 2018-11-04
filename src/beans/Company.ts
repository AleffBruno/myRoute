
import {ICompany} from '../Interfaces/ICompany';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import {User} from './User';
import { Route } from './Route';
import { CustomRouteField } from './CustomRouteField';

@Entity()
export class Company implements ICompany {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    cnpj!: string;

    @Column({
        nullable: true
    })
    phone!: string;

    @Column({
        nullable: true
    })
    email!: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt!: Date;

    /* @ManyToOne(_type => User, user => user.company_id)
    userOwner_id!: User; */
    @OneToMany(_type => User, user => user.company)
    users!: User[];

    @OneToMany(_type => Route, route => route.company)
    routes!: Route[];

    @OneToMany(_type => CustomRouteField, customRouteField => customRouteField.company)
    customRouteField!: CustomRouteField[];
}