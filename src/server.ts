import 'reflect-metadata';
import App from './App';
import express, {Application} from 'express';

class Server {
    private express: Application;
    private app: App;

    public constructor() {
        this.express = express();
        this.app = new App(this.express);
        const PORT = process.env.PORT || '3000';
        this.up(Number(PORT));
        this.app.upServer();
    }

    private up(port: number) {
        /*
        Start Express Project on a specific PORT
        # If you don't put "no-console" : false in tslint.json
        # TSLint will prevent this line and throw an error.
        */
        this.express.listen(port, () => {
            console.info('Express Application listening on port ' + port);
        });
    }
}

export default new Server;
