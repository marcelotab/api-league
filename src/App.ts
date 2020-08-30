import * as dotenv from "dotenv";
import bodyParser from 'body-parser';
import DatabaseConnection from "./Infraestructure/Persistence/DatabaseConnection";
import "reflect-metadata";
import {Application} from "express";
import DIcontainer from "./Infraestructure/DI/inversify.config";
import ApiRoutes from "./Presentation/Http/Routes";

class App {
    private app: Application;
    private apiRoutes: ApiRoutes;

    public constructor(express: Application) {
        this.app = express;
    }

    public async upServer() {
        /**
         * Load environment variables from .env file, where API keys and passwords are configured.
         */
        const result = dotenv.config();

        if (result.error) {
            throw new Error(`Environment variables not configured, aborting`);
        }

        this.apiRoutes = DIcontainer.resolve<ApiRoutes>(ApiRoutes);

        await this.setDatabaseConnection();
        this.setMiddelwares();
        this.setRoutes();
    }

    private setMiddelwares():void{
        this.app.use(bodyParser.json())
    }

    private setRoutes(): void {
        this.app.use('/api/v1.0', this.apiRoutes.getRoutes());
    }

    private async setDatabaseConnection(): Promise<void> {
        const dbConnection = new DatabaseConnection();
        await dbConnection.create();
    }

}

export default App

