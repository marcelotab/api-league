import DeletePlayerCommand from '../../../../Aplication/Commands/Player/DeletePlayerCommand';
import { injectable } from 'inversify';

@injectable()
class DeletePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt<Type>(data: Type): DeletePlayerCommand {
        const id = data['id'];

        return new DeletePlayerCommand(id);
    }
}

export default DeletePlayerAdapter;
