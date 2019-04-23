import * as Koa from 'koa';
// import * as jwt from 'koa-jwt';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';

import {
  ICustomAppContext,
  ICustomAppState,
  IDatabase,
} from './typings';

import { createModels } from './models';

import { winstonLogger } from './utilities/logger';

import { config } from './config/config';
import { router } from './routes';

const db: IDatabase = createModels(config);

const app = new Koa<ICustomAppState, ICustomAppContext>();

// add custom context objects
app.context.logger = winstonLogger;
app.context.db = db;

// Provides important security headers to make your app more secure
app.use(helmet());

// Enable cors with default options
app.use(cors());

// Enable bodyParser with default options
app.use(bodyParser());

app.use(router.routes())
  .use(router.allowedMethods());

console.log(config);
app.listen(config.port);
