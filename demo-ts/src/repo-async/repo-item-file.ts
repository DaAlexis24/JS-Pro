import { ODMLite } from './odm-lite';
import { Repository, TypeODM } from './types';

export class RepoItemFile implements Repository<Item> {
    odm: TypeODM<Item>;
    collection: string;
    constructor(file = 'db.json', collection = 'items') {
        this.odm = new ODMLite<Item>(file);
        this.collection = collection;
    }

    async read(): Promise<Item[]> {
        return await this.odm.read(this.collection);
    }
    async readById(id: string) {
        return await this.odm.readById(this.collection, id);
    }
    async create(data: Omit<Item, 'id'>) {
        return await this.odm.create(this.collection, data);
    }
    async update(id: string, data: Partial<Omit<Item, 'id'>>) {
        return await this.odm.updateById(this.collection, id, data);
    }
    async delete(id: string) {
        return await this.odm.deleteById(this.collection, id);
    }
}
