import * as express from 'express';
import { Router } from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { UserController } from '../controllers/UserController';
import { authorize } from '../services/authService';

import { check, validationResult  } from 'express-validator/check';


export class Routes {

    //public Routes : Router = express.Router();
    public userController : UserController = new UserController(); 
    
    public routes(app : express.Application) : void {

        // this approach could be good for modules architecture
        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })

        //testando tratamento de erros
        app.get('/err',function(req,res,next){
            next(new Error('ROTA ESTA JOGANDO UM NEW ERROR'));
        });

        app.route('/user')
        .post(
        User.returnRules(),
        User.validateRules,
        this.userController.save)
        .get(authorize,this.userController.getAll);

        //app.get('/userall',authorize,this.userController.getAll);


        app.route('/user/:id')
        .get(authorize,this.userController.getOne)
        .put(authorize,this.userController.update)
        .delete(authorize,this.userController.delete);

        app.route('/user/authenticate')
        .post(this.userController.authenticate);
    }

}