'use strict';

const {Router} = require(`express`);
const {HttpCode, ServerRoute} = require(`../../const`);
const asyncHandlerWrapper = require(`../middleware/async-handler-wrapper`);


module.exports = (apiRouter, service) => {
  const categoryRouter = new Router();
  apiRouter.use(ServerRoute.CATEGORY, categoryRouter);
  categoryRouter.get(`/`, asyncHandlerWrapper(async (req, res) => {
    const categories = await service.findAll();
    return res.status(HttpCode.OK).json(categories);
  }));
};
