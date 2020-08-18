import express from 'express';
import * as dotenv from "dotenv";
class App {
    private app: any;
    constructor() {
        dotenv.config();
        this.app = express();
        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    }

    public setRoutes() {
        this.app.get('/', function (_req, res) {
            res.send('Hello World!');
        });
    }
}
const app = new App();
app.setRoutes();
// https://github.com/Los-nonos/BoilerplateNode/blob/master/src/Domain/Enums/LogLevels.ts