import {getConnection} from "typeorm";

export default class DatabaseConnection {

    public async create(): Promise <any> {
        // @ts-ignore
        getConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DB
        });
    }
}
