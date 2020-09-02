import {createConnection} from 'typeorm';
import path from 'path';
const entitiesPath = path.resolve(__dirname, '../../Domain/Entities/*');

export default class DatabaseConnection {

    public async create(): Promise<void> {

        const db_username = process.env.DB_USER;
        const db_password = process.env.DB_PASSWORD;
        const db_database = process.env.DB_NAME;
        const db_port = process.env.DB_PORT;
        const db_host = process.env.DB_HOST;

        await createConnection({
            type: 'mysql',
            host: db_host,
            port: Number(db_port),
            username: db_username,
            password: db_password,
            database: db_database,
            synchronize: true,
            logging: true,
            entities: [entitiesPath],
        }).catch(err => console.log('error connection to db: ' + err));
    }
}
