import HashService from "./HashService";
import {inject, injectable} from "inversify";
import TokenService from "./TokenService";
import {IUserRepository} from "../../Domain/Contracts/Repositories/IUserRepository";
import {Types} from "../../Infraestructure/DI/types";
import {IHashService} from "./IHashService";

@injectable()
class AuthService {

    private hashService: HashService;
    private tokenService: TokenService;
    private userRepository: IUserRepository;

    constructor(
        @inject(Types.IHashService) hashService: IHashService,
        @inject(TokenService) tokenService: TokenService,
        @inject(Types.IUserRepository) userRepository: IUserRepository
    ) {
        this.hashService = hashService;
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    public async signIn(email: string, password: string) {

            const user = await this.userRepository.findByEmail(email);

            console.log(user);

            if(!user){
                throw new Error(`Incorrect Email`);
            }

            const isPasswordCorrect = await this.comparePassword(password, user[0].password);

            if(!isPasswordCorrect){

                throw new Error(`Password incorrect, please try again`);
            }

            return this.tokenService.generate({userId: user[0].id}, process.env.TIME_EXPIRE);
    }

    private async comparePassword(passwordPlain: string, passwordHashed: string): Promise<boolean> {

        return await this.hashService.compare(passwordPlain, passwordHashed);
    }
}

export default AuthService;