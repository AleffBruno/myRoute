import { promises } from "fs";




class Repository<T> implements IRepository<T> {

    save(entity: T): T {
        console.log("Repository father save");
        return entity;
    }    

    getAll(): Array<T> {
        throw new Error("Method not implemented.");

        // console.log("Repository father getAll");
        // let arr : Array<T>;
        // return arr;
    }

    update(identifier: any, entity: T): T {
        throw new Error("Method not implemented.");
    }

    delete(identifier: any): void {
        throw new Error("Method not implemented.");
    }

}