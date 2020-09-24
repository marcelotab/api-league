import { StatusPlayer } from './../../../Domain/Enums/StatusPlayer';

class CreatePlayerCommand {
    private readonly name: string;
    private readonly surname: string;
    private readonly status: StatusPlayer;
    private readonly teamId: number;

    constructor(name: string, surname: string, status: string, teamId: number) {
        this.name = name;
        this.surname = surname;
        this.status = <StatusPlayer>status;
        this.teamId = teamId;
    }

    public getName(): string {
        return this.name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public getStatus(): StatusPlayer {
        return this.status;
    }

    public getTeamId(): number {
        return this.teamId;
    }
}

export default CreatePlayerCommand;
