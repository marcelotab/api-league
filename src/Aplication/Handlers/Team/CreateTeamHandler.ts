import CreateTeamCommand from "../../Commands/Team/CreateTeamCommand";
import {ITeamRepository} from "../../../Domain/Contracts/Repositories/ITeamRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../Infraestructure/DI/types";
import Team from "../../../Domain/Entities/Team";


@injectable()
class CreateTeamHandler {

    private TeamRepository: ITeamRepository;

    constructor(
        @inject(Types.ITeamRepository) TeamRepository: ITeamRepository,
    ) {
        this.TeamRepository = TeamRepository;
    }

    public async handle(command: CreateTeamCommand) {
        const team = new Team(command.getName());
        await this.TeamRepository.save(team);
        return team;
    }

}

export default CreateTeamHandler;