import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('roles')
class Role {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    public constructor(name: string) {
        this.name = name;
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
}

export default Role;