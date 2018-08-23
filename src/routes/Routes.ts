import * as express from 'express';
import {Router} from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

export class Routes {

    public Routes : Router = express.Router();
    
    public routes(app : express.Application) : void {

        // this approach could be good for modules architecture
        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })

        app.route('/photo').post(function(req,res){
            let userRepo = new UserRepository();

            let newUser = new User();
            newUser = req.body;
            
            userRepo.save(newUser);
            res.send("acessou post e possivelmente salvou o user");
        })

    }

}