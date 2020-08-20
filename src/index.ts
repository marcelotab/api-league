import express from 'express';
import * as dotenv from "dotenv";
import DatabaseConnection from "./Infraestructure/Persistence/DatabaseConnection";
import "reflect-metadata";
import {getManager} from "typeorm";
import Team from "./Domain/Entities/Team";


dotenv.config();

class App {
    private app: any;

    public constructor() {
        this.app = express();
        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
        this.setDatabaseConnection();
    }

    public setRoutes() {
        this.app.get('/', async function (_req, res) {
            // exmple new Team, mover a repositorio despues
            let team = new Team('River Plate');
            const entityManager = getManager();
            try {
                await entityManager.save(team);

            } catch (e) {
                console.log(e);
            }
            res.send('Hello World!');
        });
    }

    private async setDatabaseConnection(): Promise<void> {
        const dbConnection = new DatabaseConnection();
        await dbConnection.create();
    }

}

const app = new App();
app.setRoutes();


