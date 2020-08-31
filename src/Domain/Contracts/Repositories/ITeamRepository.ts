import Team from "../../Entities/Team";

export interface ITeamRepository {

    save(team): Promise<Team>
    findAll(): Promise<Team[]>
}