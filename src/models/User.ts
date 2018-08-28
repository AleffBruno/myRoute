

// class User implements IUser {
//     name!: string;
// }

import { IUser } from '../Interfaces/IUser';

import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import {IsEmail, Min, Max} from "class-validator";

import { check, validationResult  } from 'express-validator/check';


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

    static nex (req:any,res:any,next:any) {
        //console.log(req.body.email);
        //[check(req.body.email).isEmail(),check('password').isLength({ min: 5 })];

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }

    static rules() {
        return [check('email').isEmail(),check('password').isLength({ min: 5 })];
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