/* eslint-disable no-unused-vars */
import Ban from '../../Entities/Ban';

export interface IBanRepository {
    save(ban: Ban): Promise<Ban>;
    findAll(): Promise<Ban[]>;
    find(option: any): Promise<Ban[]>;
}
