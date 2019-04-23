import * as Router from 'koa-router';
// import controller = require('./controller');

import { BaseContext } from 'koa';
import { UserController } from '../../controllers/v1';

// authentication middleware
import { authService } from './../../services';
// const jwtMiddleware = authService.verifyTokenMiddleware();

const userRoute = new Router({ prefix: '/user'});
const userCtrl = new UserController();

userRoute.get('/', userCtrl.browse);
userRoute.get('/:id', userCtrl.read);
userRoute.post('/', userCtrl.create);
userRoute.delete('/:id', userCtrl.delete);
userRoute.patch('/:id', userCtrl.update);

export { userRoute };
