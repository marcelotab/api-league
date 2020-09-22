class CreateUserCommand {
    private readonly _name: string;
    private readonly _surname: string;
    private readonly _email: string;
    private readonly _password: string;

    constructor(name: string, surname: string, email: string, password: string) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._password = password;
    }

    public getName(): string {
        return this._name;
    }

    public getSurname(): string {
        return this._surname;
    }

    public getEmail(): string {
        return this._email;
    }

    public getPassword(): string {
        return this._password;
    }
}

export default CreateUserCommand;
