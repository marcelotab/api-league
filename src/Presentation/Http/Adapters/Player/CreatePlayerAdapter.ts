import CreatePlayerCommand from '../../../../Aplication/Commands/Player/CreatePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class CreatePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { name; surname; team_id }): CreatePlayerCommand {
        const { name, surname, team_id: teamId } = data;

        return new CreatePlayerCommand(name, surname, teamId);
    }
}

export default CreatePlayerAdapter;
