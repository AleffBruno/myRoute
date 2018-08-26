import * as express from 'express';
import { Router } from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { UserController } from '../controllers/UserController';

export class Routes {

    //public Routes : Router = express.Router();
    public userController : UserController = new UserController(); 
    
    public routes(app : express.Application) : void {

        // this approach could be good for modules architecture
        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })

        app.route('/user')
        .post(this.userController.save)
        .get(this.userController.getAll);


        app.route('/user/:id')
        .get(this.userController.getOne)
        .put(this.userController.update)
        .delete(this.userController.delete)
    }

}