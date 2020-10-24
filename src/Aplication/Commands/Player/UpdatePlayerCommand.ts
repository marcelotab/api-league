class UpdatePlayerCommand {
    private readonly id: number;
    private readonly name: string;
    private readonly surname: string;
    private readonly teamId: number;
    private readonly photo: string;

    constructor(id: number, name: string, surname: string, teamId: number, photo: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.teamId = teamId;
        this.photo = photo;
    }

    public getId(): number {
        return this.id;
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

    public getPhoto(): string {
        return this.photo;
    }
}

export default UpdatePlayerCommand;
