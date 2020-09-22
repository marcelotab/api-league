class LoginCommand {
    private readonly _email: string;
    private readonly _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    public getEmail(): string {
        return this._email;
    }

    public getPassword(): string {
        return this._password;
    }
}

export default LoginCommand;
