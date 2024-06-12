import express from 'express';
import expressWinston from 'express-winston';
import logger from './logger.mjs';

const app = express();
app.set('trust proxy', 1);
app.set('x-powered-by', false);
app.use(expressWinston.logger({winstonInstance: logger, level: 'http'}));

export default app;
