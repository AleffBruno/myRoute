import * as express from 'express';
//import Routes from './routes/Routes';
import {Routes} from './routes/Routes';


class App {
    public app : express.Application;
    public allRoutes : Routes = new Routes();

    constructor () {
        this.app = express.default();
        //this.app.use(this.allRoutes);
        this.allRoutes.routes(this.app);
    }
}

export default new App().app;