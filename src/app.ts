import express, { Application } from 'express';
import log from './logger';
import connect from './db/connect';
import cors from 'cors';
import router from './routers';
import customErrorHandler from './errors/customErrorHandler';
// import { deserializeUser } from './middlewares';
import dotenv from 'dotenv';
import { toNumber } from 'lodash';

dotenv.config({});

const PORT = toNumber(process.env.PORT) as number;

const app: Application = express();

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(deserializeUser);
// app.use(router);
app.use(customErrorHandler);

app.listen(PORT || 3000, () =>
  log.info(`Server running at http://localhost:${PORT}`)
);
