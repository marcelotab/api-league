import DeleteBanCommand from '../../Commands/Ban/DeleteBanCommand';
import { IBanRepository } from '../../../Domain/Contracts/Repositories/IBanRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Ban from '../../../Domain/Entities/Ban';
//import HttpError from "../../../Presentation/Http/Errors/BaseHttpError";
import InternalError from '../../../Presentation/Http/Errors/InternalError';

@injectable()
class DeleteBanHandler {
    private banRepository: IBanRepository;

    constructor(@inject(Types.IBanRepository) banRepository: IBanRepository) {
        this.banRepository = banRepository;
    }

    public async handle(command: DeleteBanCommand): Promise<any> {
        const ban = { id: command.getId() } as Ban;

        const wasBanDeleted = await this.banRepository.delete(ban);

        if (!wasBanDeleted) throw new InternalError(`Ban with id ${command.getId()} could not be deleted`, 500);

        return `Successful removal, ban with id ${command.getId()} was destroyed`;
    }
}

export default DeleteBanHandler;
