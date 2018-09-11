"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var secretKey = "aaa";
function generateToken(user) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        id: user.id,
                        email: user.email
                    };
                    return [4 /*yield*/, jwt.sign(data, secretKey, { expiresIn: '1d' })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.generateToken = generateToken;
function decodeToken(token) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, jwt.verify(token, secretKey)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.decodeToken = decodeToken;
//isso é um middleware, nao confundir com as funções acima
function authorize(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
            if (!token) {
                res.status(401).json({
                    message: "Unauthenticated"
                });
            }
            else {
                jwt.verify(token, secretKey, function (error, decoded) {
                    if (error) {
                        res.status(401).json({
                            message: "Invalid token"
                        });
                    }
                    else {
                        console.log("decodedAqui>" + decoded);
                        //nao posso retornar isso pq mostra as info confidenciais do user em cada request
                        //req.body.tokeninfo = decoded;
                        next();
                    }
                });
            }
            return [2 /*return*/];
        });
    });
}
exports.authorize = authorize;
;
// exports.generateToken = async(data:any) => {
//     return jwt.sign(data,secretKey,{expiresIn:'1d'});
// }
// exports.decodeToken = async (token:any) => {
//     var data = await jwt.verify(token,secretKey);
//     return data;
// };
// exports.authorize = function(req: Request,res: Response,next: NextFunction) {
//     var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization ;
//     if (!token) {
//         res.status(401).json({ //sei la porque aqui nao foi "send"
//             message: "Unauthenticated"
//         });
//     } else {
//         jwt.verify(token,secretKey,function(error:any,decoded:any){
//             if (error) {
//                 res.status(401).json({
//                     message: "Invalid token"
//                 });
//             } else {
//                 next();
//             }
//         });
//     }
// };
//# sourceMappingURL=authService.js.map