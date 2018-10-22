//import Repository from '../repositories/Repository';

import {EntityRepository, Repository} from "typeorm";
//import { User } from '../models/User';
import { User } from '../beans/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async findAndUpdate(id: number,reqBody: User) {
        let userToUpdate = await this.findOne(id);
        userToUpdate = reqBody;
        return await this.save(userToUpdate);
    }

    async authenticate(data: any) {
        let user = this.findOne({
            where:{ 
                email:data.email, 
                password:data.password
            }
        });
        return user;
    }
}