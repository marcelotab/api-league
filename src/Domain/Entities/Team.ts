import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Player from './Player';

@Entity('teams')
class Team {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(() => Player, (player) => player.team)
    public players: Player[];

    public constructor(name: string) {
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getPlayers(): Player[] {
        return this.players;
    }

    public setPlayers(value: Player[]): void {
        this.players = value;
    }
}

export default Team;
