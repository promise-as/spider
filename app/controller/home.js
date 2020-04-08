'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '首页';

    // 调用 extend 里面扩展的 application

    // console.log(this.app.foo());


    // 调用 extend 里面扩展的 context

    // console.log(this.ctx.getHost());

    // 调用 extend 里面扩展的 getHelperData 方法

    // console.log(this.ctx.helper.getHelperData());
    
    // 调用 extend 里面扩展的 request.js

    console.log(this.ctx.request.foo());

    // 注意 异步
    await ctx.render('index');
  }
}

module.exports = HomeController;
