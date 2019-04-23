import { Context } from 'koa';
import { ICustomAppContext } from './../../typings';

// type alias for shortcut to trigger intellisense
type CustomContext = Context & ICustomAppContext;

export class HomeController {

  constructor() {

  }

  public home = async (ctx: CustomContext) => {
    ctx.logger.info(
      'hello world! hello world! hello world! hello world! hello world! hello world! hello world!',
      'homeController.home',
      { x: 21, y: 'hello' },
    );

    try {
      throw new Error('I just want to throw some error!');
    } catch (error) {
      ctx.logger.error(
        error.message,
        'homeController.home',
        { x: 21, y: 'hello' },
        error.stack,
      );
    }

    ctx.body = 'Hello World v1';
  }

  public health = async(ctx: CustomContext) => {
    const healthStatus = {
      database: 'ok',
    };

    ctx.body = healthStatus;
  }

}
