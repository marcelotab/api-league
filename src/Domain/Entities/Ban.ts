import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Player from "./Player";

@Entity('bans')
class Ban {

    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _dateFrom: Date;

    @Column()
    private _dateTo: Date;

    @ManyToOne(_type => Player, player => player.bans)
    private _player: Player;

    public constructor(dateFrom: Date, dateTo: Date, player: Player) {
        this._dateFrom = dateFrom;
        this._dateTo = dateTo;
        this._player = player;
    }

    public get id(): number {
        return this._id;
    }

    public get dateFrom(): Date {
        return this._dateFrom;
    }

    public set dateFrom(value: Date) {
        this._dateFrom = value;
    }

    public get dateTo(): Date {
        return this._dateTo;
    }

    public set dateTo(value: Date) {
        this._dateTo = value;
    }

    public get player(): Player {
        return this._player;
    }

    public set player(value: Player) {
        this._player = value;
    }
}

export default Ban;