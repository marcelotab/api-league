import Player from "../../Entities/Player";

export interface IPlayerRepository {

    save(player): Promise<Player>
    findAll(): Promise<Player[]>
}