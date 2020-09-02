import CreatePlayerCommand from "../../Commands/Player/CreatePlayerCommand";
import {IPlayerRepository} from "../../../Domain/Contracts/Repositories/IPlayerRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../Infraestructure/DI/types";
import Player from "../../../Domain/Entities/Player";


@injectable()
class CreatePlayerHandler {

    private PlayerRepository: IPlayerRepository;

    constructor(
        @inject(Types.IPlayerRepository) PlayerRepository: IPlayerRepository,
    ) {
        this.PlayerRepository = PlayerRepository;
    }

    public async handle(command: CreatePlayerCommand) {
        const player = new Player(
            command.getName(), 
            command.getSurname(), 
            command.getStatus()
            );
        await this.PlayerRepository.save(player);
        return player;
    }

}

export default CreatePlayerHandler;