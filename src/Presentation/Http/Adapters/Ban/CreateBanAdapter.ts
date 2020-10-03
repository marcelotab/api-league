import CreateBanCommand from '../../../../Aplication/Commands/Ban/CreateBanCommand';
import { injectable } from 'inversify';

@injectable()
class CreateBanAdapter {
    /* eslint-disable-next-line @typescript-eslint/naming-convention*/
    public adapt(data: { dateFrom: string; dateTo: string; player_id: number }): CreateBanCommand {
        const dateFrom = new Date(data.dateFrom);
        const dateTo = new Date(data.dateTo);
        const { player_id: playerId } = data;

        return new CreateBanCommand(dateFrom, dateTo, playerId);
    }
}

export default CreateBanAdapter;
