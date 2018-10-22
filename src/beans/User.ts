

// class User implements IUser {
//     name!: string;
// }

//import { IUser } from '../Interfaces/IUser';
import {IUser} from '../Interfaces/IUser';
import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";
//import { check, validationResult  } from 'express-validator/check';
//import { getRepository } from "typeorm";


@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    //@Min(0)
    //@Max(100)
    name!: string;

    @Column()
    //@Min(0)
    //@Max(100)
    password!: string;

    @Column()
    //@IsEmail()
    email!: string;

    @Column()
    cellphone!: string;

    fullName(): string {
        return "My full name is: "+this.name;
    }

    //MOVIDO PARA MODEL
    // static validateRules (req:any,res:any,next:any) {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(422).json({ errors: errors.array() });
    //     }
    //     next();
    // }

    //MOVIDO PARA MODEL
    // static returnRules() {
    //     //tentar passar depois um parametro que nao pode, por exemplo accessLevel
    //     return [
    //         check('email').isEmail()
    //             .withMessage('Coloque um e-mail valido')
    //             //.custom(new User().customValidationUniqueEmail()),
    //             .custom(new User().uniqueEmail),
    //         check('password').isLength({ min: 5 })
    //     ];
    // }

    // se eu deixar como atributo, isso vai ser retornado quando esse user for requisitado
    // por exeplo, no getOne ou getAll
    // customValidationUniqueEmail = () => {
    //     return async function(email:string){
    //         return await getRepository(User).findOne({email: email}).then(user => {
    //             if(user) {
    //                 return Promise.reject('e-mail ja existe');
    //             }
    //         });
    //     }
    // }

    // MOVIDO PARA MODEL
    // async uniqueEmail(email:string) {
    //     try {
    //         let user = await getRepository(User).findOne({email: email});
    //         if(user){
    //             return Promise.reject('e-mail ja existe');
    //         }
    //     } catch ( err ){
    //         console.log("função uniqueEmail falha no request")
    //     }
        
    // }

    
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