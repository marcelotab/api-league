/* eslint-disable no-unused-vars */
import User from '../../Entities/User';

export interface IUserRepository {
    save(user: User): Promise<User>;

    findByEmail(email: string): Promise<User>;
}
