import * as express from 'express';
import { inject, injectable } from 'inversify';
import UserRoutes from './user';
import TeamRoutes from './team';
import PlayerRoutes from './player';
import DocumentationRoutes from './documentation';
import AuthRoutes from './auth';

@injectable()
class ApiRoutes {
    private router: express.Router;
    private userRoutes: UserRoutes;
    private teamRoutes: TeamRoutes;
    private playerRoutes: PlayerRoutes;
    private docsRoutes: DocumentationRoutes;
    private authRoutes: AuthRoutes;

    public constructor(
        @inject(DocumentationRoutes) docsRoutes: DocumentationRoutes,
        @inject(UserRoutes) userRoutes: UserRoutes,
        @inject(TeamRoutes) teamRoutes: TeamRoutes,
        @inject(PlayerRoutes) playerRoutes: PlayerRoutes,
        @inject(AuthRoutes) authRoutes: AuthRoutes,
    ) {
        this.router = express.Router();
        this.userRoutes = userRoutes;
        this.teamRoutes = teamRoutes;
        this.playerRoutes = playerRoutes;
        this.docsRoutes = docsRoutes;
        this.playerRoutes = playerRoutes;
        this.authRoutes = authRoutes;
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/', (_req, res) => {
            res.send('Hello World!');
        });
        this.router.use('/docs', this.docsRoutes.getRoutes());
        this.router.use('/auth', this.authRoutes.getRoutes());
        this.router.use('/users', this.userRoutes.getRoutes());
        this.router.use('/teams', this.teamRoutes.getRoutes());
        this.router.use('/players', this.playerRoutes.getRoutes());
    }

    public getRoutes(): express.Router {
        return this.router;
    }
}

export default ApiRoutes;
