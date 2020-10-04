import UpdateTeamCommand from '../../../../Aplication/Commands/Team/UpdateTeamCommand';
import { injectable } from 'inversify';

@injectable()
class UpdateTeamAdapter {
    public adapt(data: { id: number; name: string }): UpdateTeamCommand {
        const { id, name } = data;

        return new UpdateTeamCommand(id, name);
    }
}

export default UpdateTeamAdapter;
