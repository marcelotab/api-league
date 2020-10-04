class CreateBanCommand {
    private readonly dateFrom: Date;
    private readonly dateTo: Date;
    private readonly playerId: number;

    constructor(dateFrom: Date, dateTo: Date, playerId: number) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.playerId = playerId;
    }

    public getDateFrom(): Date {
        return this.dateFrom;
    }

    public getDateTo(): Date {
        return this.dateTo;
    }

    public getPlayerId(): number {
        return this.playerId;
    }
}

export default CreateBanCommand;
