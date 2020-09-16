import {IPlayerRepository} from "../../../Domain/Contracts/Repositories/IPlayerRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../Infraestructure/DI/types";


@injectable()
class IndexPlayerHandler {

    private PlayerRepository: IPlayerRepository;

    constructor(
        @inject(Types.IPlayerRepository) PlayerRepository: IPlayerRepository,
    ) {
        this.PlayerRepository = PlayerRepository;
    }

    public async handle() {
        //To do: findByPaginated.
        return await this.PlayerRepository.findAll();
    }

}

export default IndexPlayerHandler;