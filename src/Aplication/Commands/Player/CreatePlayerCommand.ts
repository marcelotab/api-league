import { StatusPlayer } from './../../../Domain/Enums/StatusPlayer';

class CreatePlayerCommand {
    private readonly _name: string;
    private readonly _surname: string;
    private readonly _status: StatusPlayer;

    constructor(name: string, surname: string, status: string) {
        this._name = name;
        this._surname = surname;
        this._status = <StatusPlayer>status;
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

}

export default CreatePlayerCommand;