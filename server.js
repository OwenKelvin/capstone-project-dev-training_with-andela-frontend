import express, { static } from 'express';
import { join } from 'path';

const app = express();

app.use(static(join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 4000);
