import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(3333, () => console.log('Server is listening on port 3333'));
