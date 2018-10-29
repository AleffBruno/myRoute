import {UserRepository} from '../repositories/UserRepository';
import {Request,Response,NextFunction} from 'express';
//import {User} from '../models/User';
import {User} from '../beans/User';
import {getCustomRepository} from "typeorm";
import {generateToken,decodeToken} from '../services/authService';


export class UserController {
    async save(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        let newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        let savedUser = await userRepo.save(newUser);

        const generatedToken = await generateToken(savedUser);

        res.send({
            message:"acessou post e possivelmente salvou o user",
            user: savedUser,
            token: generatedToken
        });
    }

    async getAll(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization ;
        let decodedToken = await decodeToken(token);
        console.log(decodedToken);

        let allUsers = await userRepo.find({});
        res.send({
            message:"acessou getAll user",
            users: allUsers
        })
    }

    async getOne(req: Request,res: Response, next: NextFunction) {
        let userRepo = getCustomRepository(UserRepository); 

        let user = await userRepo.findOne(req.params.id);

        // isso seria o tratamento apropiado?
        if(!user) {
            next(new Error('Passe um ID valido'));
            //throw new Error('Passe um ID valido'); // isso daqui deixa resposta inifinita para user
        }

        // se der um erro acima, isso daqui ainda vai ser executado e vai dar outro erro(console)
        // dizendo que nao pode enviar headers dps da resposta da request
        res.send({
            message:"acessou getOne user",
            user: user
        })
    }

    async update(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        let userToUpdateId = req.params.id;

        let userNewInfo = req.body as User;

        let userUpdated = await userRepo.findAndUpdate(userToUpdateId,userNewInfo);

        res.send({
            message:"acessou update user",
            user: userUpdated
        })
    }

    async delete(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        userRepo.delete(req.params.id);

        res.send({
            message:"acessou delete user"
        })
    }


    async login(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        let data = {
            email: req.body.email,
            password: req.body.password
        }

        let user = await userRepo.authenticate(data);

        if(!user) {
            res.status(500).send({
                message: "usuario ou senha errados"
            });
            return;
        }

        // const generatedToken = await generateToken({
        //     id: user.id,
        //     email: user.email
        // });
        const generatedToken = await generateToken(user);

        res.send({
            token: generatedToken,
            user : user
        })


    }
}