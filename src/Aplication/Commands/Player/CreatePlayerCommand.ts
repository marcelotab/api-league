import { StatusPlayer } from './../../../Domain/Enums/StatusPlayer';

class CreatePlayerCommand {
    private readonly _name: string;
    private readonly _surname: string;
    private readonly _status: StatusPlayer;
    private readonly _team_id: number;

    constructor(name: string, surname: string, status: string, team_id: number) {
        this._name = name;
        this._surname = surname;
        this._status = <StatusPlayer>status;
        this._team_id = team_id;
    }

    public getName(): string {
        return this._name;
    }

    public getSurname(): string {
        return this._surname;
    }

    public getStatus(): StatusPlayer {
        return this._status;
    }

    public getTeamId(): number {
        return this._team_id;
    }
}

export default CreatePlayerCommand;
