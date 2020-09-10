import User from "../../Entities/User";

export interface IUserRepository {

    save(user): Promise<User>

    findByEmail(email: string): Promise<User>
}