import * as express from 'express';
import {Router} from 'express';

export class Routes {

    public Routes : Router = express.Router();
    
    public routes(app : express.Application) : void {

        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })

        app.route('/').get(function(req,res){
            res.send("acessou get");
        })

    }

}