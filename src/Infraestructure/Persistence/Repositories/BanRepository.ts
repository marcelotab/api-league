import {IUserRepository} from "../../../../Domain/Interfaces/Repositories/IUserRepository";
import TypeRepository from './TypeRepository';
import Ban from "../../../Domain/Entities/Ban";

class PlayerRepository extends TypeRepository implements IBanRepository {
    public async save(ban: Ban): Promise<Ban> {
        return await this.repository(Ban).persist(ban);
    }

}

export default PlayerRepository;