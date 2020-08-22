import Role from "../../Entities/Role";

export interface IRoleRepository {

    save(role): Promise<Role>
}