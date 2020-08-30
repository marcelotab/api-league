import CreateUserCommand from "../../Commands/User/CreateUserCommand";
import {IUserRepository} from "../../../Domain/Contracts/Repositories/IUserRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../Infraestructure/DI/types";
import User from "../../../Domain/Entities/User";
import {IHashService} from "../../Services/IHashService";

@injectable()
class CreateUserHandler {

    private userRepository: IUserRepository;
    private hashService: IHashService;

    constructor(
        @inject(Types.IUserRepository) userRepository: IUserRepository,
        @inject(Types.IHashService) hashService: IHashService
    ) {
        this.userRepository = userRepository;
        this.hashService = hashService;
    }

    public async handle(command: CreateUserCommand) {
        const password = await this.hashService.hash(command.getPassword());
        const user = new User(command.getName(), command.getSurname(), command.getEmail(), password);
        await this.userRepository.save(user);
        return user;
    }

}

export default CreateUserHandler;