import IndexByIdTeamCommand from '../../Commands/Team/IndexByIdTeamCommand';
import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Team from '../../../Domain/Entities/Team';
//import HttpError from "../../../Presentation/Http/Errors/BaseHttpError";
//import InternalError from '../../../Presentation/Http/Errors/InternalError';

@injectable()
class IndexByIdTeamHandler {
    private playerRepository: IPlayerRepository;

    constructor(@inject(Types.IPlayerRepository) playerRepository: IPlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async handle(command: IndexByIdTeamCommand): Promise<any> {
        const team = { id: command.getId() } as Team;

        return this.playerRepository.find({ where: { team }, relations: ['ban'] });
    }
}

export default IndexByIdTeamHandler;
