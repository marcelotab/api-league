class DeleteBanCommand {
    private readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }
}

export default DeleteBanCommand;
