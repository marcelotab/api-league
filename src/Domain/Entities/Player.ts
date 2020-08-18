import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {StatusPlayer} from "../Enums/StatusPlayer";
import Team from "./Team";
import Ban from "./Ban";

@Entity('players')
class Player {

    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _name: string;

    @Column()
    private _surname: string;

    @Column({
        type: "enum",
        enum: StatusPlayer,
        default: StatusPlayer.UNBANNED
    })
    private _status: StatusPlayer;

    @ManyToOne(_type => Team, team => team.players)
    private _team: Team;

    @OneToMany(_type => Ban, ban => ban.player)
    private _bans: Ban[];

    public constructor(name: string, surname: string, status: StatusPlayer) {
        this._name = name;
        this._surname = surname;
        this._status = status;
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

    public get surname(): string {
        return this._surname;
    }

    public set surname(value: string) {
        this._surname = value;
    }

    public get status(): StatusPlayer {
        return this._status;
    }

    public set status(value: StatusPlayer) {
        this._status = value;
    }

    public get team(): Team {
        return this._team;
    }

    public set team(value: Team) {
        this._team = value;
    }

    public get bans(): Ban[] {
        return this._bans;
    }

    public set bans(value: Ban[]) {
        this._bans = value;
    }
}

export default Player;