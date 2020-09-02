import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import Role from "./Role";

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public surname: string;

    @Column({unique: true})
    public email: string;

    @Column()
    public password: string;

    @ManyToMany(_type => Role)
    @JoinTable() public roles: Role[];

    public constructor(name: string, surname: string, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
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

    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(value: string) {
        this.password = value;
    }


    getRoles(): Role[] {
        return this.roles;
    }

    setRoles(value: Role[]) {
        this.roles = value;
    }
}

export default User;