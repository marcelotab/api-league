import DeleteTeamCommand from '../../../../Aplication/Commands/Team/DeleteTeamCommand';
import { injectable } from 'inversify';

@injectable()
class DeleteTeamAdapter {
    public adapt<Type>(data: Type): DeleteTeamCommand {
        const id = data['id'];

        return new DeleteTeamCommand(id);
    }
}

export default DeleteTeamAdapter;
