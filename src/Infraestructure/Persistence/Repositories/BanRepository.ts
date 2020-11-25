/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import TypeRepository from './TypeRepository';
import { IBanRepository } from '../../../Domain/Contracts/Repositories/IBanRepository';
import Ban from '../../../Domain/Entities/Ban';

class BanRepository extends TypeRepository implements IBanRepository {
    public async save(ban: Ban): Promise<Ban> {
        return await this.repository(Ban).save(ban);
    }

    public async findAll(): Promise<Ban[]> {
        return await this.repository(Ban).find({ relations: ['player'] });
    }

    public async find(option: any): Promise<Ban[]> {
        return await this.repository(Ban).find(option);
    }

    public async delete(ban: Ban): Promise<boolean> {
        const result = await this.repository(Ban).delete(ban);

        return result?.affected > 0;
    }
}

export default BanRepository;
