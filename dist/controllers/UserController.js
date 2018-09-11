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
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = require("../repositories/UserRepository");
var User_1 = require("../models/User");
var typeorm_1 = require("typeorm");
var authService_1 = require("../services/authService");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.save = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, newUser, savedUser, generatedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        newUser = new User_1.User();
                        newUser.name = req.body.name;
                        newUser.email = req.body.email;
                        newUser.password = req.body.password;
                        return [4 /*yield*/, userRepo.save(newUser)];
                    case 1:
                        savedUser = _a.sent();
                        return [4 /*yield*/, authService_1.generateToken(savedUser)];
                    case 2:
                        generatedToken = _a.sent();
                        res.send({
                            message: "acessou post e possivelmente salvou o user",
                            user: savedUser,
                            token: generatedToken
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, token, decodedToken, allUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
                        return [4 /*yield*/, authService_1.decodeToken(token)];
                    case 1:
                        decodedToken = _a.sent();
                        console.log(decodedToken);
                        return [4 /*yield*/, userRepo.find({})];
                    case 2:
                        allUsers = _a.sent();
                        res.send({
                            message: "acessou getAll user",
                            users: allUsers
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getOne = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        return [4 /*yield*/, userRepo.findOne(req.params.id)];
                    case 1:
                        user = _a.sent();
                        // isso seria o tratamento apropiado?
                        if (!user) {
                            next(new Error('Passe um ID valido'));
                            //throw new Error('Passe um ID valido'); // isso daqui deixa resposta inifinita para user
                        }
                        // se der um erro acima, isso daqui ainda vai ser executado e vai dar outro erro(console)
                        // dizendo que nao pode enviar headers dps da resposta da request
                        res.send({
                            message: "acessou getOne user",
                            user: user
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, userToUpdateId, userNewInfo, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        userToUpdateId = req.params.id;
                        userNewInfo = req.body;
                        return [4 /*yield*/, userRepo.findAndUpdate(userToUpdateId, userNewInfo)];
                    case 1:
                        userUpdated = _a.sent();
                        res.send({
                            message: "acessou update user",
                            user: userUpdated
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo;
            return __generator(this, function (_a) {
                userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                userRepo.delete(req.params.id);
                res.send({
                    message: "acessou delete user"
                });
                return [2 /*return*/];
            });
        });
    };
    UserController.prototype.authenticate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, data, user, generatedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getCustomRepository(UserRepository_1.UserRepository);
                        data = {
                            email: req.body.email,
                            password: req.body.password
                        };
                        return [4 /*yield*/, userRepo.authenticate(data)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            res.status(500).send({
                                message: "usuario ou senha errados"
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, authService_1.generateToken(user)];
                    case 2:
                        generatedToken = _a.sent();
                        res.send({
                            token: generatedToken,
                            user: user
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map