import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json());

app.post('/users', UserController.store);

app.listen(3333, () => console.log('Server is listening on port 3333'));
