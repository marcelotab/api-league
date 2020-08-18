import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Player from "./Player";

@Entity('teams')
class Team {

    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _name: string;

    @OneToMany(_type => Player, player => player.team) private _players: Player[];

    public constructor(name: string) {
        this._name = name;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

   public get players(): Player[] {
        return this._players;
    }

    public set players(value: Player[]) {
        this._players = value;
    }
}

export default Team;