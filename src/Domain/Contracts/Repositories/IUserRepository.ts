import User from "../../Entities/User";

export interface IUserRepository {

    save(user): Promise<User>
}