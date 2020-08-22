import {IUserRepository} from "../../../../Domain/Interfaces/Repositories/IUserRepository";
import TypeRepository from './TypeRepository';
import Player from "../../../Domain/Entities/Player";

class PlayerRepository extends TypeRepository implements IPlayerRepository {
    public async save(player: Player): Promise<Player> {
        return await this.repository(Player).persist(player);
    }

}

export default PlayerRepository;