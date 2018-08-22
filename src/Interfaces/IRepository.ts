







interface IRepository<T> {
    save(entity: T) :T;
    getAll() : Array<T>;
    update(identifier: any,entity :T): T;
    delete(identifier: any): void;
}