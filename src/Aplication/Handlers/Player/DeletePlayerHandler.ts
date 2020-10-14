import DeletePlayerCommand from '../../Commands/Player/DeletePlayerCommand';
import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Player from '../../../Domain/Entities/Player';
//import HttpError from "../../../Presentation/Http/Errors/BaseHttpError";
import InternalError from '../../../Presentation/Http/Errors/InternalError';

@injectable()
class DeletePlayerHandler {
    private playerRepository: IPlayerRepository;

    constructor(@inject(Types.IPlayerRepository) playerRepository: IPlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async handle(command: DeletePlayerCommand): Promise<any> {
        const player = { id: command.getId() } as Player;

        const wasPlayerDeleted = await this.playerRepository.delete(player);

        if (!wasPlayerDeleted) throw new InternalError(`Player with id ${command.getId()} could not be deleted`, 500);

        return `Successful removal, player with id ${command.getId()} was destroyed`;
    }
}

export default DeletePlayerHandler;
