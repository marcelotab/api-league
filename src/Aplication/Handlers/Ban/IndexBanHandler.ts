import { IBanRepository } from '../../../Domain/Contracts/Repositories/IBanRepository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../Infraestructure/DI/types';
import Ban from '../../../Domain/Entities/Ban';

@injectable()
class IndexBanHandler {
    private banRepository: IBanRepository;

    constructor(@inject(Types.IBanRepository) banRepository: IBanRepository) {
        this.banRepository = banRepository;
    }

    public async handle(): Promise<Ban[]> {
        return await this.banRepository.findAll();
    }
}

export default IndexBanHandler;
