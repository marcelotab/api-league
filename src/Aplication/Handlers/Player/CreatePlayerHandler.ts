import CreatePlayerCommand from '../../Commands/Player/CreatePlayerCommand';
import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Player from '../../../Domain/Entities/Player';
import Team from '../../../Domain/Entities/Team';

@injectable()
class CreatePlayerHandler {
    private playerRepository: IPlayerRepository;

    constructor(@inject(Types.IPlayerRepository) playerRepository: IPlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async handle(command: CreatePlayerCommand): Promise<any> {
        const player = new Player(command.getName(), command.getSurname());

        if (command.getTeamId()) {
            player.team = <Team>{ id: command.getTeamId() };
        }

        if (command.getPhoto()) {
            player.photo = command.getPhoto();
        }

        await this.playerRepository.save(player);
        return player;
    }
}

export default CreatePlayerHandler;
