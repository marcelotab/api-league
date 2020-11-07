import TypeRepository from './TypeRepository';
import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import Player from '../../../Domain/Entities/Player';

class PlayerRepository extends TypeRepository implements IPlayerRepository {
    public async save(player: Player): Promise<Player> {
        return await this.repository(Player).save(player);
    }

    // public async findAll(): Promise<Player[]> {
    //     return await this.repository(Player).find();
    // }

    // public async findAll(): Promise<Player[]> {
    //     return await this.manager()
    //     .createQueryBuilder()
    //     .select('players')
    //     .from('players')
    //     .leftJoinAndSelect('players.bans', 'bans.playerId')
    //     .getMany()
    // }

    public async findAll(): Promise<Player[]> {
        return await this.manager().query(
            `SELECT * FROM players AS p LEFT JOIN bans AS b ON b.id = (SELECT b.id AS bid FROM bans AS b WHERE p.id = b.playerId ORDER BY b.dateTo DESC LIMIT 1);`,
        );
    }

    //SELECT * FROM players AS p LEFT JOIN bans AS b ON b.id = (SELECT b.id FROM bans AS b WHERE p.id = b.playerId ORDER BY b.dateTo DESC LIMIT 1);

    //SELECT * FROM players AS p JOIN bans AS b WHERE b.id = (SELECT id FROM bans WHERE p.id = playerId ORDER BY dateTo DESC LIMIT 1);
    //SELECT p.*, (SELECT b.dateTo FROM bans AS b WHERE p.id = b.playerId ORDER BY dateTo DESC LIMIT 1) AS b_id FROM players AS p

    public async delete(player: Player): Promise<boolean> {
        const result = await this.repository(Player).delete(player);

        return result?.affected > 0;
    }

    public findById(id: number): Promise<Player> {
        return this.repository(Player).findOne(id);
    }
}

export default PlayerRepository;
