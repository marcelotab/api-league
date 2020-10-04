/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import TypeRepository from './TypeRepository';
import { ITeamRepository } from '../../../Domain/Contracts/Repositories/ITeamRepository';
import Team from '../../../Domain/Entities/Team';

class TeamRepository extends TypeRepository implements ITeamRepository {
    public async save(team: Team): Promise<Team> {
        return await this.repository(Team).save(team);
    }

    public async findAll(): Promise<Team[]> {
        return await this.repository(Team).find();
    }

    public async find(option: any): Promise<Team[]> {
        return await this.repository(Team).find(option);
    }

    public async findById(id: number): Promise<Team> {
        return await this.repository(Team).findOne(id);
    }

    public async delete(team: Team): Promise<boolean> {
        const result = await this.repository(Team).delete(team);

        return result?.affected > 0;
    }
}

export default TeamRepository;
