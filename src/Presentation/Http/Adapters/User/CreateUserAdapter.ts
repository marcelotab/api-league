import CreateUserCommand from '../../../../Aplication/Commands/User/CreateUserCommand';
import { injectable } from 'inversify';

@injectable()
class CreateUserAdapter {
    public adapt(data: { name; surname; email; password }): CreateUserCommand {
        const { name, surname, email, password } = data;

        return new CreateUserCommand(name, surname, email, password);
    }
}

export default CreateUserAdapter;
