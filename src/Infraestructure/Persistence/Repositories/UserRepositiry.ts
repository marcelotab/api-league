import User from '../../../Domain/Entities/User';
import {IUserRepository} from "../../../Domain/Contracts/Repositories/IUserRepository";
import TypeRepository from './TypeRepository';

class UserRepository extends TypeRepository implements IUserRepository {
    public async save(user: User): Promise<User> {
        return await this.repository(User).persist(user);
    }

}

export default UserRepository;