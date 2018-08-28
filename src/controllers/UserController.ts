import {UserRepository} from '../repositories/UserRepository';
import {Request,Response} from 'express';
import {User} from '../models/User';
import {getCustomRepository} from "typeorm";
import {generateToken,decodeToken,authorize} from '../services/authService';
import {validate} from "class-validator";

import { check, validationResult  } from 'express-validator/check';


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

    async getOne(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        let user = await userRepo.findOne(req.params.id);

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


    async authenticate(req: Request,res: Response) {
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