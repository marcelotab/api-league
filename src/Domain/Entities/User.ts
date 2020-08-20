import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import Role from "./Role";

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _name: string;

    @Column()
    private _surname: string;

    @Column({unique: true})
    private _email: string;

    @Column()
    private _password: string;

    @ManyToMany(_type => Role)
    @JoinTable() private _roles: Role[];

    public constructor(name: string, surname: string, email: string, password: string) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._password = password;
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

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }


    get roles(): Role[] {
        return this._roles;
    }

    set roles(value: Role[]) {
        this._roles = value;
    }
}

export default User;