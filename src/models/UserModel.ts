import { check, validationResult  } from 'express-validator/check';
import { getRepository } from "typeorm";
import { User } from '../beans/User';

export class UserModel {
    
    static validateRules (req:any,res:any,next:any) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }

    static returnRules() {
        //tentar passar depois um parametro que nao pode, por exemplo accessLevel
        return [
            check('email').isEmail()
                .withMessage('Coloque um e-mail valido')
                //.custom(new User().customValidationUniqueEmail()),
                .custom(new UserModel().uniqueEmail),
            check('password').isLength({ min: 5 })
        ];
    }

    

    async uniqueEmail(email:string) {
        try {
            let user = await getRepository(User).findOne({email: email});
            if(user){
                return Promise.reject('e-mail ja existe');
            }
        } catch ( err ){
            console.log("função uniqueEmail falha no request")
        }
        
    }

}