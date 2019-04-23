import * as Router from 'koa-router';
// import controller = require('./controller');

import { BaseContext } from 'koa';

import { HomeController } from '../../controllers/v1';

import { userRoute } from "./user";


const v1Router = new Router({ prefix: '/v1' });

const homeCtrl = new HomeController();
v1Router.get('/', homeCtrl.home);
v1Router.get('/health', homeCtrl.health);

const nestedRoutes: Router[] = [userRoute];
for (const router of nestedRoutes) {
  v1Router.use(router.routes(), router.allowedMethods());
}

export { v1Router };
