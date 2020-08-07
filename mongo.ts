import express from 'express';
import { MongoClient } from 'mongodb'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

const router = express.Router()

router.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
    res.status(500).send('No se pudo conectar a la DB 💥: ' + err);
    } else {
      res.send('Conectado a la DB! 🐸');
      db.close();
    }
  });
});

export default router