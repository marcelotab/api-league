import { IPlayerRepository } from '../../../Domain/Contracts/Repositories/IPlayerRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Player from '../../../Domain/Entities/Player';

@injectable()
class IndexPlayerHandler {
    private playerRepository: IPlayerRepository;

    constructor(@inject(Types.IPlayerRepository) playerRepository: IPlayerRepository) {
        this.playerRepository = playerRepository;
    }

    public async handle(): Promise<Player[]> {
        return await this.playerRepository.find({ relations: ['ban'] });
    }
}

export default IndexPlayerHandler;
