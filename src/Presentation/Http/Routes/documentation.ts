import { Router } from 'express';
import { injectable } from 'inversify';
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from '../Documentation/swagger.json'

@injectable()
class DocumentationRoutes {
    
    private router: Router;

    public constructor() {
        this.router = Router();
        this.setRoutes();
    }

    private setRoutes(): void {

        this.router.use('/',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDoc)
        );
    }

    public getRoutes() {
        return this.router;
    }

}

export default DocumentationRoutes;