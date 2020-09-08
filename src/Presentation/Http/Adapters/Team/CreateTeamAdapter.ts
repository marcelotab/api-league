import CreateTeamCommand from "../../../../Aplication/Commands/Team/CreateTeamCommand";
import {injectable} from "inversify";

@injectable()
class CreateTeamAdapter {

    public adapt(data: any): CreateTeamCommand {

        const {name} = data;
        
        return new CreateTeamCommand(name);
    }

}

export default CreateTeamAdapter;