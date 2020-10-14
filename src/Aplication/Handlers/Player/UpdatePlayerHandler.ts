import UpdatePlayerCommand from '../../Commands/Player/UpdatePlayerCommand';
import {IPlayerRepository} from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import {inject, injectable} from 'inversify';
import {Types} from '../../../Infraestructure/DI/types';
import Player from '../../../Domain/Entities/Player';
import NotFoundError from "../../../Presentation/Http/Errors/NotFoundError";
import InternalError from "../../../Presentation/Http/Errors/InternalError";
import Team from "../../../Domain/Entities/Team";

@injectable()
class UpdatePlayerHandler {
    private playerRepository: IPlayerRepository;

    constructor(@inject(Types.IPlayerRepository) playerRepository: IPlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async handle(command: UpdatePlayerCommand): Promise<Player | void> {

        try {
            const player = await this.playerRepository.findById(command.getId());

            if (!player) throw new NotFoundError(`Team with id: ${command.getId()} not found`, 505);

            player.setName(command.getName());
            player.setSurname(command.getSurname());

            if (command.getTeamId()) {
                player.team = <Team>{id: command.getTeamId()};
            }

            return await this.playerRepository.save(player);

        } catch (e) {
            throw new InternalError(`Team could not be updated`, 500);
        }


    }
}

export default UpdatePlayerHandler;
