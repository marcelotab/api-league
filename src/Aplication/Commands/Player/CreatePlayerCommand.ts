
class CreatePlayerCommand {
    private readonly name: string;
    private readonly surname: string;
    private readonly teamId: number;

    constructor(name: string, surname: string,teamId: number) {
        this.name = name;
        this.surname = surname;
        this.teamId = teamId;
    }

    public getName(): string {
        return this.name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public getTeamId(): number {
        return this.teamId;
    }
}

export default CreatePlayerCommand;
