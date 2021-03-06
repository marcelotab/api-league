import DeleteTeamCommand from '../../Commands/Team/DeleteTeamCommand';
import { ITeamRepository } from '../../../Domain/Contracts/Repositories/ITeamRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';
import InternalError from '../../../Presentation/Http/Errors/InternalError';

@injectable()
class DeleteTeamHandler {
    private teamRepository: ITeamRepository;

    constructor(@inject(Types.ITeamRepository) teamRepository: ITeamRepository) {
        this.teamRepository = teamRepository;
    }

    public async handle(command: DeleteTeamCommand): Promise<string> {
        const team = { id: command.getId() } as Team;

        const wasTeamDeleted = await this.teamRepository.delete(team);

        if (!wasTeamDeleted) throw new InternalError(`Team with id ${command.getId()} could not be deleted`, 500);

        return `Successful removal, team with id ${command.getId()} was destroyed`;
    }
}

export default DeleteTeamHandler;
