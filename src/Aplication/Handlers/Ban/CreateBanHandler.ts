import CreateBanCommand from '../../Commands/Ban/CreateBanCommand';
import { IBanRepository } from '../../../Domain/Contracts/Repositories/IBanRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Player from '../../../Domain/Entities/Player';
import Ban from '../../../Domain/Entities/Ban';

@injectable()
class CreateBanHandler {
    private banRepository: IBanRepository;

    constructor(@inject(Types.IBanRepository) banRepository: IBanRepository) {
        this.banRepository = banRepository;
    }

    public async handle(command: CreateBanCommand): Promise<any> {
        const player = { id: command.getPlayerId() } as Player;

        const ban = new Ban(command.getDate(), command.getMatches(), player);

        await this.banRepository.save(ban);
        return ban;
    }
}

export default CreateBanHandler;
