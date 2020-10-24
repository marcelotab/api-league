import CreatePlayerCommand from '../../../../Aplication/Commands/Player/CreatePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class CreatePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { name; surname; team_id; photo }): CreatePlayerCommand {
        const { name, surname, team_id: teamId, photo } = data;

        return new CreatePlayerCommand(name, surname, teamId, photo);
    }
}

export default CreatePlayerAdapter;
