"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.customErrorHandler = function (err, req, res, next) {
            console.log("reqAqui>" + req);
            console.log('MIDDLEWARE DE TRATAMENTO DO ERRO AQUI NO APP...');
            res.status(500).send({ message: err.message });
            next();
        };
    }
    return ErrorHandler;
}());
exports.default = new ErrorHandler().customErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map