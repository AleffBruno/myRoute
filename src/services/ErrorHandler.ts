

import {Request,Response,NextFunction} from 'express';


class ErrorHandler {
     customErrorHandler = function(err:Error, req:Request, res:Response, next:NextFunction) {
        console.log("reqAqui>"+req);
        console.log('MIDDLEWARE DE TRATAMENTO DO ERRO AQUI NO APP...');
        res.status(500).send({message:err.message});
        next();
    }
}

export default new ErrorHandler().customErrorHandler;


