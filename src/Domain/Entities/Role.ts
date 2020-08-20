import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('roles')
class Role {

    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _name: string;

    public constructor(name: string) {
        this._name = name;
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
}

export default Role;