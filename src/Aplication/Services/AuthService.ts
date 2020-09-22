import HashService from './HashService';
import { inject, injectable } from 'inversify';
import TokenService from './TokenService';
import { IUserRepository } from '../../Domain/Contracts/Repositories/IUserRepository';
import { Types } from '../../Infraestructure/DI/types';
import { IHashService } from './IHashService';

@injectable()
class AuthService {
    private hashService: HashService;
    private tokenService: TokenService;
    private userRepository: IUserRepository;

    constructor(
        @inject(Types.IHashService) hashService: IHashService,
        @inject(TokenService) tokenService: TokenService,
        @inject(Types.IUserRepository) userRepository: IUserRepository,
    ) {
        this.hashService = hashService;
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    public async signIn(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error(`Incorrect Email`);
        }

        const isPasswordValid = await this.checkIfUnencryptedPasswordIsValid(password, user.getPassword());

        if (!isPasswordValid) {
            throw new Error(`Password incorrect, please try again`);
        }

        return this.tokenService.generate(
            { userId: user.getId(), userEmail: user.getEmail() },
            process.env.TIME_EXPIRE,
        );
    }

    private async checkIfUnencryptedPasswordIsValid(passwordPlain: string, passwordHashed: string): Promise<boolean> {
        return await this.hashService.compare(passwordPlain, passwordHashed);
    }
}

export default AuthService;
