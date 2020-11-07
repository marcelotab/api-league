import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Player from './Player';

@Entity('bans')
class Ban {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'date' })
    public date: Date;

    @Column()
    public matches: number;

    @ManyToOne(() => Player, (player) => player.bans, { onDelete: 'CASCADE' })
    public player: Player;

    public constructor(date: Date, matches: number, player: Player) {
        this.date = date;
        this.matches = matches;
        this.player = player;
    }

    public getId(): number {
        return this.id;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDateFrom(value: Date): void {
        this.date = value;
    }

    public getMatches(): number {
        return this.matches;
    }

    public setMatches(value: number): void {
        this.matches = value;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public setPlayer(value: Player): void {
        this.player = value;
    }
}

export default Ban;
