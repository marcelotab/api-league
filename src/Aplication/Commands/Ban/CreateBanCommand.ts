class CreateBanCommand {
    private readonly date: Date;
    private readonly matches: number;
    private readonly playerId: number;

    constructor(date: Date, matches: number, playerId: number) {
        this.date = date;
        this.matches = matches;
        this.playerId = playerId;
    }

    public getDate(): Date {
        return this.date;
    }

    public getMatches(): number {
        return this.matches;
    }

    public getPlayerId(): number {
        return this.playerId;
    }
}

export default CreateBanCommand;
