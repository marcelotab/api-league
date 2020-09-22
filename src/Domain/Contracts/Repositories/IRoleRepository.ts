/* eslint-disable no-unused-vars */
import Role from '../../Entities/Role';

export interface IRoleRepository {
    save(role: Role): Promise<Role>;
}
