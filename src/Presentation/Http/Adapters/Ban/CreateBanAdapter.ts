import CreateBanCommand from '../../../../Aplication/Commands/Ban/CreateBanCommand';
import { injectable } from 'inversify';

@injectable()
class CreateBanAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { date: string; matches: number; player_id: number }): CreateBanCommand {
        const date = new Date(data.date);

        const { player_id: playerId, matches } = data;

        return new CreateBanCommand(date, matches, playerId);
    }
}

export default CreateBanAdapter;
