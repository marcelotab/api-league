import { createConnection } from 'typeorm';
import path from 'path';
const entitiesPath = path.join(__dirname, '../../Domain/Entities/*{.ts,.js}');

export default class DatabaseConnection {
    public async create(): Promise<void> {
        const dbUsername = process.env.DB_USER;
        const dbPassword = process.env.DB_PASSWORD;
        const dbDatabase = process.env.DB_NAME;
        const dbPort = process.env.DB_PORT;
        const dbHost = process.env.DB_HOST;

        await createConnection({
            type: 'mysql',
            host: dbHost,
            port: Number(dbPort),
            username: dbUsername,
            password: dbPassword,
            database: dbDatabase,
            synchronize: true,
            logging: true,
            entities: [entitiesPath],
        }).catch((err) => console.log('error connection to db: ' + err));
    }
}
