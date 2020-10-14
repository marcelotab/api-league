import TypeRepository from './TypeRepository';
import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import Player from '../../../Domain/Entities/Player';

class PlayerRepository extends TypeRepository implements IPlayerRepository {
    public async save(player: Player): Promise<Player> {
        return await this.repository(Player).save(player);
    }

    public async findAll(): Promise<Player[]> {
        return await this.repository(Player).find();
    }

    public async delete(player: Player): Promise<boolean> {
        const result = await this.repository(Player).delete(player);

        return result?.affected > 0;
    }

    public findById(id: number): Promise<Player> {
        return this.repository(Player).findOne(id);
    }
}

export default PlayerRepository;
