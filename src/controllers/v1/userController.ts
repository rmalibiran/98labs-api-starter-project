import { Context } from 'koa';
import * as bcrypt from 'bcrypt';

import { ICustomAppContext } from '../../typings';
import { User } from './../../models/user';

// type alias for shortcut to trigger intellisense
type CustomContext = Context & ICustomAppContext;

export class UserController {

  constructor() {

  }

  public read = async (ctx: CustomContext) => {

    try {
      let data: User = await ctx.db.UserRepository.findByPk(ctx.params.id);
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }

  }

  public browse = async (ctx: CustomContext) => {

    // @TODO: add filters and proper limits
    const data = await ctx.db.UserRepository.findAll({ limit: 10 });
    ctx.body = data;

  };

  public create = async (ctx: CustomContext) => {

    try {
      const encryptedPassword = bcrypt.hashSync(
        ctx.request.body.password,
        bcrypt.genSaltSync()
      );

      const data = await ctx.db.UserRepository.create({
        email: ctx.request.body.email,
        password: encryptedPassword,
      });
      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  };

  public delete = async (ctx: CustomContext) => {
    try {

      const data = await ctx.db.UserRepository.destroy({
        where: {
          id: ctx.params.id,
        },
      });

      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  };

  public update = async (ctx: CustomContext) => {
    try {
      const updateObject = {
        email: ctx.request.body.email,
        password: ctx.request.body.password,
      };

      const updateQuery = {
        where: {
          id: ctx.params.id,
        }
      };

      const data = await ctx.db.UserRepository.update(
        updateObject, 
        updateQuery
      );

      ctx.body = data;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}
