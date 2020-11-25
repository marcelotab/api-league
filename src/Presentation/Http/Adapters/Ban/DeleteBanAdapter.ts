import DeleteBanCommand from '../../../../Aplication/Commands/Ban/DeleteBanCommand';
import { injectable } from 'inversify';

@injectable()
class DeletePlayerAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt<Type>(data: Type): DeleteBanCommand {
        const id = data['id'];

        return new DeleteBanCommand(id);
    }
}

export default DeletePlayerAdapter;
