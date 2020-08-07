import express from "express";
import mongoRoute from "./mongo"
const app = express();

const PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World! 🌍');
});

app.use('/db', mongoRoute)

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});