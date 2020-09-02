import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Player from "./Player";

@Entity('bans')
class Ban {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public dateFrom: Date;

    @Column()
    public dateTo: Date;

    @ManyToOne(_type => Player, player => player.bans)
    public player: Player;

    public constructor(dateFrom: Date, dateTo: Date, player: Player) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.player = player;
    }

    public getId(): number {
        return this.id;
    }

    public getDateFrom(): Date {
        return this.dateFrom;
    }

    public setDateFrom(value: Date) {
        this.dateFrom = value;
    }

    public getDateTo(): Date {
        return this.dateTo;
    }

    public setDateTo(value: Date) {
        this.dateTo = value;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public setPlayer(value: Player) {
        this.player = value;
    }
}

export default Ban;