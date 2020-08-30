import TypeRepository from './TypeRepository';
import {IPlayerRepository} from "../../../Domain/Contracts/Repositories/IPlayerRepository";
import Player from "../../../Domain/Entities/Player";

class PlayerRepository extends TypeRepository implements IPlayerRepository {
    public async save(player: Player): Promise<Player> {
        return await this.repository(Player).save(player);
    }

}

export default PlayerRepository;