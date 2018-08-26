import {UserRepository} from '../repositories/UserRepository';
import {Request,Response} from 'express';
import {User} from '../models/User';

import {getCustomRepository} from "typeorm";

export class UserController {
    //inventei agora, talvez fosse melhor por no construtor
    //nao queria ficar chamado no começo de cada metodo

    async save(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

        let newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;

        let savedUser = await userRepo.save(newUser);
        res.send({
            message:"acessou post e possivelmente salvou o user",
            user: savedUser
        });
    }

    async getAll(req: Request,res: Response) {
        let userRepo = getCustomRepository(UserRepository); 

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


}