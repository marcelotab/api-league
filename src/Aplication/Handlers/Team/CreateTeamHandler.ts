import CreateTeamCommand from '../../Commands/Team/CreateTeamCommand';
import {ITeamRepository} from '../../../Domain/Contracts/Repositories/ITeamRepository';
import {inject, injectable} from 'inversify';
import {Types} from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';

@injectable()
class CreateTeamHandler {
    private teamRepository: ITeamRepository;

    constructor(@inject(Types.ITeamRepository) teamRepository: ITeamRepository) {
        this.teamRepository = teamRepository;
    }

    public async handle(command: CreateTeamCommand): Promise<Team> {
        const team = new Team(command.getName(), command.getPhoto());
        await this.teamRepository.save(team);
        return team;
    }
}

export default CreateTeamHandler;
