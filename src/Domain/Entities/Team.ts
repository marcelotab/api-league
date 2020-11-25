import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Player from './Player';

@Entity('teams')
class Team {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true})
    public name: string;

    @Column({ nullable: true })
    public photo: string;

    @OneToMany(() => Player, (player) => player.team)
    public players: Player[];

    public constructor(name: string, photo: string) {
        this.name = name;
        this.photo = photo;
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

    public getPhoto(): string | null {
        return this.photo;
    }

    public setPhoto(photo: string): void {
        this.photo = photo;
    }
}

export default Team;
