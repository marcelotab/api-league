/* eslint-disable no-unused-vars */
import Team from '../../Entities/Team';

export interface ITeamRepository {
    save(team: Team): Promise<Team>;
    findAll(): Promise<Team[]>;
    find(option: any): Promise<Team[]>;
    findById(id: number): Promise<Team>;
    delete(team: Team): Promise<boolean>;
}
