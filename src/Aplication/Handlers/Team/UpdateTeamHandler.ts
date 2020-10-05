import HttpError from '../../../Presentation/Http/Errors/BaseHttpError';
import UpdateTeamCommand from '../../Commands/Team/UpdateTeamCommand';
import { ITeamRepository } from '../../../Domain/Contracts/Repositories/ITeamRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';

@injectable()
class UpdateTeamHandler {
    private teamRepository: ITeamRepository;

    constructor(@inject(Types.ITeamRepository) teamRepository: ITeamRepository) {
        this.teamRepository = teamRepository;
    }

    public async handle(command: UpdateTeamCommand): Promise<Team | void> {
        try {
            const team = await this.teamRepository.findById(command.getId());

            if (!team) throw new HttpError(`Team with id: ${command.getId()} not found`, 505);

            team.setName(command.getName());

            return await this.teamRepository.save(team);
        } catch (e) {
            throw new HttpError(`Team could not be updated`, 500);
        }
    }
}

export default UpdateTeamHandler;
