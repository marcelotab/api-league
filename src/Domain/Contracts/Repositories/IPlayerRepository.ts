/* eslint-disable no-unused-vars */
import Player from '../../Entities/Player';

export interface IPlayerRepository {
    save(player: Player): Promise<Player>;
    findAll(): Promise<Player[]>;
    delete(player: Player): Promise<boolean>;
}
