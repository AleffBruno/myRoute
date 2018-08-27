

// class User implements IUser {
//     name!: string;
// }

import { IUser } from '../Interfaces/IUser';

import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import {IsEmail, Min, Max} from "class-validator";



@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    @Min(0)
    @Max(100)
    name!: string;

    @Column()
    @Min(0)
    @Max(100)
    password!: string;

    @Column()
    @IsEmail()
    email!: string;

    fullName(): string {
        return "My full name is: "+this.name;
    }
    
    // @BeforeInsert()
    // async validationsToCreateNewUser() : Promise<void> {
    //     console.log("a");
    //     const errors = await validate({
    //         name: this.name,
    //         email: this.email,
    //         password: this.password
    //     });
    //     if (errors.length > 0) {
    //         throw new Error(`Validation failed!`); 
    //         //console.log("tem erro");
    //     }
    // }

    
}