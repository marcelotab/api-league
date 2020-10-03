import TypeRepository from './TypeRepository';
import { IBanRepository } from '../../../Domain/Contracts/Repositories/IBanRepository';
import Ban from '../../../Domain/Entities/Ban';

class BanRepository extends TypeRepository implements IBanRepository {
    public async save(ban: Ban): Promise<Ban> {
        return await this.repository(Ban).save(ban);
    }

    public async findAll(): Promise<Ban[]> {
        return await this.repository(Ban).find();
    }
}

export default BanRepository;
