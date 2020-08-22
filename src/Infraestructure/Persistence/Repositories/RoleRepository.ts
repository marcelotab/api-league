import {IUserRepository} from "../../../../Domain/Interfaces/Repositories/IUserRepository";
import TypeRepository from './TypeRepository';
import Role from "../../../Domain/Entities/Role";

class RoleRepository extends TypeRepository implements IRoleRepository {
    public async save(role: Role): Promise<Role> {
        return await this.repository(Role).persist(role);
    }

}

export default RoleRepository;