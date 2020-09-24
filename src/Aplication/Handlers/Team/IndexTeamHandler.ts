import { ITeamRepository } from '../../../Domain/Contracts/Repositories/ITeamRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';

@injectable()
class IndexTeamHandler {
    private teamRepository: ITeamRepository;

    constructor(@inject(Types.ITeamRepository) teamRepository: ITeamRepository) {
        this.teamRepository = teamRepository;
    }

    public async handle(): Promise<Team[]> {
        //To do: findByPaginated
        return await this.teamRepository.find({ relations: ['players'] });
    }
}

export default IndexTeamHandler;
