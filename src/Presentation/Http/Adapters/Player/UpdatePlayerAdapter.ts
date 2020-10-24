import UpdatePlayerCommand from '../../../../Aplication/Commands/Player/UpdatePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class UpdatePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { id; name; surname; status; team_id; photo }): UpdatePlayerCommand {
        const { id, name, surname, team_id: teamId, photo } = data;

        return new UpdatePlayerCommand(id, name, surname, teamId, photo);
    }
}

export default UpdatePlayerAdapter;
