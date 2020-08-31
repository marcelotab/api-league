// import IndexTeamCommand from "../../Commands/Team/IndexTeamCommand";
import {ITeamRepository} from "../../../Domain/Contracts/Repositories/ITeamRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../Infraestructure/DI/types";


@injectable()
class IndexTeamHandler {

    private TeamRepository: ITeamRepository;

    constructor(
        @inject(Types.ITeamRepository) TeamRepository: ITeamRepository,
    ) {
        this.TeamRepository = TeamRepository;
    }

    public async handle() {
        //To do: findByPaginated
        return await this.TeamRepository.findAll();
    }

}

export default IndexTeamHandler;