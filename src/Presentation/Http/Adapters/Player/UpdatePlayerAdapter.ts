import UpdatePlayerCommand from '../../../../Aplication/Commands/Player/UpdatePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class UpdatePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { id; name; surname; status; team_id }): UpdatePlayerCommand {
        const { id, name, surname, team_id: teamId } = data;

        return new UpdatePlayerCommand(id, name, surname, teamId);
    }
}

export default UpdatePlayerAdapter;