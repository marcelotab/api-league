import { ITeamRepository } from '../../../Domain/Contracts/Repositories/ITeamRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';

@injectable()
class IndexTeamHandler {
    private TeamRepository: ITeamRepository;

    constructor(@inject(Types.ITeamRepository) TeamRepository: ITeamRepository) {
        this.TeamRepository = TeamRepository;
    }

    public async handle(): Promise<Team[]> {
        //To do: findByPaginated
        return await this.TeamRepository.find({ relations: ['players'] });
    }
}

export default IndexTeamHandler;
