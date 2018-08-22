import UserRepository from '../repositories/UserRepository';

class UserController {

    protected userRepo : UserRepository = new UserRepository();

    save(){
        return "save";
    }

}