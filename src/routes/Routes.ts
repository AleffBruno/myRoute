import * as express from 'express';
//import { User } from '../beans/User';
import { UserModel as User } from '../models/UserModel';;
import { UserController } from '../controllers/UserController';
import { authorize } from '../services/authService';


export class Routes {

    //public Routes : Router = express.Router();
    public userController : UserController = new UserController(); 
    
    public routes(app : express.Application) : void {

        // this approach could be good for modules architecture
        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })

        //testando tratamento de erros
        //COMENTEI AQUI PQ QUANDO USA "npm run prod" ISSO DAQUI DA ERRO
        app.get('/err',function(req,res,next){
            res.send("hi");
            //next(new Error('ROTA ESTA JOGANDO UM NEW ERROR'));
        });

        app.route('/user')
        .post(User.returnRules(),User.validateRules,this.userController.save)
        .get(authorize,this.userController.getAll);

        //app.get('/userall',authorize,this.userController.getAll);


        app.route('/user/:id')
        .get(authorize,this.userController.getOne)
        .put(authorize,this.userController.update)
        .delete(authorize,this.userController.delete);

        app.route('/user/login')
        .post(this.userController.login);
    }

}