import CreateTeamCommand from '../../../../Aplication/Commands/Team/CreateTeamCommand';
import { injectable } from 'inversify';

@injectable()
class CreateTeamAdapter {
    public adapt(data: { name: string; photo: string }): CreateTeamCommand {
        const { name, photo } = data;

        return new CreateTeamCommand(name, photo);
    }
}

export default CreateTeamAdapter;
