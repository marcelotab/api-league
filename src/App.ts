import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import DatabaseConnection from './Infraestructure/Persistence/DatabaseConnection';
import 'reflect-metadata';
import { Application } from 'express';
import DIcontainer from './Infraestructure/DI/inversify.config';
import ApiRoutes from './Presentation/Http/Routes';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './Presentation/Http/Middelwares/Errors/ErrorHandler';
import { errorLog } from './Presentation/Http/Middelwares/Errors/ErrorLog';
import { notFoundHandler } from './Presentation/Http/Middelwares/NotFoundHandler';

class App {
    private app: Application;
    private apiRoutes: ApiRoutes;

    public constructor(express: Application) {
        this.app = express;
    }

    public async upServer(): Promise<void> {
        /**
         * Load environment variables from .env file, where API keys and passwords are configured.
         */
        if (process.env.NODE_ENV !== 'production') {
            const result = dotenv.config();
            if (result.error) {
                throw new Error(`Environment variables not configured, aborting`);
            }
        }

        this.apiRoutes = DIcontainer.resolve<ApiRoutes>(ApiRoutes);

        await this.setDatabaseConnection();
        this.setMiddelwares();
        this.setRoutes();
        this.setFinalMiddlewares();
    }

    private setMiddelwares(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
    }

    private setRoutes(): void {
        this.app.use('/api/v1.0', this.apiRoutes.getRoutes());
    }

    private setFinalMiddlewares(): void {
        this.app.use(errorLog);
        this.app.use(errorHandler);
        this.app.use(notFoundHandler);
    }

    private async setDatabaseConnection(): Promise<void> {
        const dbConnection = new DatabaseConnection();
        await dbConnection.create();
    }
}

export default App;
