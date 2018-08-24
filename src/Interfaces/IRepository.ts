







export interface IRepository<T> {
    save(entity: T) : Promise<T>;
    getAll() : Array<T>;
    update(identifier: any,entity :T): T;
    delete(identifier: any): void;
}


// interface IRepositoryBase<T, TId> {
//     save(entity: T) :T;
//     getAll() : Array<T>;
//     update(identifier: TId,entity :T): T;
//     delete(identifier: TId): void;
// }

// interface IRepository<T> extends  IRepositoryBase<T, number>  {
//     save(entity: T) :T;
//     getAll() : Array<T>;
//     update(identifier: number,entity :T): T;
//     delete(identifier: number): void;
// }