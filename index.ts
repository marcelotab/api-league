import express from 'express';
class App {
    private app: any;
    constructor() {
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