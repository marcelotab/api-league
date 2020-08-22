import TypeRepository from './TypeRepository';
import {ITeamRepository} from "../../../Domain/Contracts/Repositories/ITeamRepository";
import Team from "../../../Domain/Entities/Team";

class TeamRepository extends TypeRepository implements ITeamRepository {
    public async save(team: Team): Promise<Team> {
        return await this.repository(Team).persist(team);
    }

}

export default TeamRepository;