import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Team from './Team';
import Ban from './Ban';

@Entity('players')
class Player {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public surname: string;

    @Column({ nullable: true })
    public photo: string;

    @ManyToOne(() => Team, (team) => team.players)
    public team: Team;

    @OneToMany(() => Ban, (ban) => ban.player)
    public bans: Ban[];

    public constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
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

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(value: string): void {
        this.surname = value;
    }

    public getPhoto(): string {
        return this.photo;
    }

    public setPhoto(value: string): void {
        this.photo = value;
    }

    public getTeam(): Team {
        return this.team;
    }

    public setTeam(value: Team): void {
        this.team = value;
    }

    public getBans(): Ban[] {
        return this.bans;
    }

    public setBans(value: Ban[]): void {
        this.bans = value;
    }
}

export default Player;
