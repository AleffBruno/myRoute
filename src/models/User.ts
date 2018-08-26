

// class User implements IUser {
//     name!: string;
// }

import { IUser } from '../Interfaces/IUser';

import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    name!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    fullName(): string {
        return "My full name is: "+this.name;
    }

    
}