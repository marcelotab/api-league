import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {StatusPlayer} from "../Enums/StatusPlayer";
import Team from "./Team";
import Ban from "./Ban";

@Entity('players')
class Player {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public surname: string;

    @Column({
        type: "enum",
        enum: StatusPlayer,
        default: StatusPlayer.UNBANNED
    })
    public status: StatusPlayer;

    @ManyToOne(_type => Team, team => team.players)
    public team: Team;

    @OneToMany(_type => Ban, ban => ban.player)
    public bans: Ban[];

    public constructor(name: string, surname: string, status: StatusPlayer) {
        this.name = name;
        this.surname = surname;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(value: string) {
        this.surname = value;
    }

    public getStatus(): StatusPlayer {
        return this.status;
    }

    public setStatus(value: StatusPlayer) {
        this.status = value;
    }

    public getTeam(): Team {
        return this.team;
    }

    public setTeam(value: Team) {
        this.team = value;
    }

    public getBans(): Ban[] {
        return this.bans;
    }

    public setBans(value: Ban[]) {
        this.bans = value;
    }
}

export default Player;
