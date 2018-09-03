import * as express from 'express';
import * as bodyParser from 'body-parser';
//import Routes from './routes/Routes';
import {Routes} from './routes/Routes';
import "reflect-metadata";
import {createConnection} from "typeorm";
import customErrorHandler from './services/ErrorHandler';

class App {
    public app : express.Application;
    public allRoutes : Routes = new Routes();

    constructor () {
        this.app = express.default();
        this.config();
        //this.app.use(this.allRoutes);
        this.allRoutes.routes(this.app);
        this.startConnectionTypeOrm();
        this.app.use(customErrorHandler);
    }

    private config() : void {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({extended:false}));
    }

    async startConnectionTypeOrm() {
        //config come from 'ormconfig.json'
        // WARNING > on key "entities" DON'T use '/'(slash) when start to write the path
        await createConnection();
    }
}

export default new App().app;