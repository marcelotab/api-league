import IndexByIdTeamCommand from '../../../../Aplication/Commands/Team/IndexByIdTeamCommand';
import { injectable } from 'inversify';

@injectable()
class IndexByIdTeamAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt<Type>(data: Type): IndexByIdTeamCommand {
        const id = data['id'];

        return new IndexByIdTeamCommand(id);
    }
}

export default IndexByIdTeamAdapter;
