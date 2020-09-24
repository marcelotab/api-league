class CreateUserCommand {
    private readonly name: string;
    private readonly surname: string;
    private readonly email: string;
    private readonly password: string;

    constructor(name: string, surname: string, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }
}

export default CreateUserCommand;
