import * as dotenv from "dotenv";
import DatabaseConnection from "./Infraestructure/Persistence/DatabaseConnection";
import "reflect-metadata";
import ApiRoutes from "./Presentation/Http/Routes";
import {Application} from "express";

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

        this.apiRoutes = new ApiRoutes();

        await this.setDatabaseConnection();
        this.setRoutes();
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

