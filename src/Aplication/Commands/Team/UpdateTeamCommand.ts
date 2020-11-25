class UpdateTeamCommand {
    private readonly id: number;
    private readonly name: string;
    private readonly photo: string;

    constructor(id: number, name: string, photo: string) {
        this.id = id;
        this.name = name;
        this.photo = photo;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoto(): string | null {
        return this.photo;
    }

}

export default UpdateTeamCommand;
