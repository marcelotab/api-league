/* eslint-disable no-unused-vars */
import Ban from '../../Entities/Ban';

export interface IBanRepository {
    save(Ban): Promise<Ban>;
}
