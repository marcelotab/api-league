class CreateTeamCommand {
    private readonly name: string;
    private readonly photo: string;

    constructor(name: string, photo: string) {
        this.name = name;
        this.photo = photo;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoto(): string | null {
        return this.photo;
    }
}

export default CreateTeamCommand;
