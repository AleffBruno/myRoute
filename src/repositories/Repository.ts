
import { getManager , EntitySchema } from "typeorm";
import { IRepository } from '../Interfaces/IRepository';

import { User } from '../models/User';

export default class Repository<T> implements IRepository<T> {

    save(entity: T): T {
        console.log("Repository father save");
        //se der ruim, volta pra linha debaixo
        getManager().getRepository(User).save(entity);
        //return await getManager().getRepository(T).save(entity);
        return entity;
    }    

    getAll(): Array<T> {
        //throw new Error("Method not implemented.");
        console.log("Repository father getAll");
        let arr : Array<T> = [];
        return arr;
    }

    update(identifier: any, entity: T): T {
        //throw new Error("Method not implemented.");
        return entity;
    }

    delete(identifier: any): void {
        //throw new Error("Method not implemented.");
    }

}