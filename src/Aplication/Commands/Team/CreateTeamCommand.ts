class CreateTeamCommand {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

export default CreateTeamCommand;
