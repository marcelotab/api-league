import {IUserRepository} from "../../../../Domain/Interfaces/Repositories/IUserRepository";
import TypeRepository from './TypeRepository';
import Team from "../../../Domain/Entities/Team";

class TeamRepository extends TypeRepository implements ITeamRepository {
    public async save(team: Team): Promise<Team> {
        return await this.repository(Team).persist(team);
    }

}

export default TeamRepository;