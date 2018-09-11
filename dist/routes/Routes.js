"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var UserController_1 = require("../controllers/UserController");
var authService_1 = require("../services/authService");
var Routes = /** @class */ (function () {
    function Routes() {
        //public Routes : Router = express.Router();
        this.userController = new UserController_1.UserController();
    }
    Routes.prototype.routes = function (app) {
        // this approach could be good for modules architecture
        // this.Routes.get('/',function(req,res){
        //     res.send("acessou get");
        // })
        //testando tratamento de erros
        //COMENTEI AQUI PQ QUANDO USA "npm run prod" ISSO DAQUI DA ERRO
        // app.get('/err',function(req,res,next){
        //     res.send("hi");
        //     //next(new Error('ROTA ESTA JOGANDO UM NEW ERROR'));
        // });
        app.route('/user')
            .post(User_1.User.returnRules(), User_1.User.validateRules, this.userController.save)
            .get(authService_1.authorize, this.userController.getAll);
        //app.get('/userall',authorize,this.userController.getAll);
        app.route('/user/:id')
            .get(authService_1.authorize, this.userController.getOne)
            .put(authService_1.authorize, this.userController.update)
            .delete(authService_1.authorize, this.userController.delete);
        app.route('/user/authenticate')
            .post(this.userController.authenticate);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map