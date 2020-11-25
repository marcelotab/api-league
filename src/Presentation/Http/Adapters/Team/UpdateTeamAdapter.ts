import UpdateTeamCommand from '../../../../Aplication/Commands/Team/UpdateTeamCommand';
import { injectable } from 'inversify';

@injectable()
class UpdateTeamAdapter {
    public adapt(data: { id: number; name: string; photo: string }): UpdateTeamCommand {
        const { id, name, photo } = data;

        return new UpdateTeamCommand(id, name, photo);
    }
}

export default UpdateTeamAdapter;
