import CreatePlayerCommand from '../../../../Aplication/Commands/Player/CreatePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class CreatePlayerAdapter {
    public adapt(data: { name; surname; status; team_id }): CreatePlayerCommand {
        const { name, surname, status, team_id } = data;

        return new CreatePlayerCommand(name, surname, status, team_id);
    }
}

export default CreatePlayerAdapter;
