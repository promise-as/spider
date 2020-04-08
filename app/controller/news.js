'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;

    // 获取数据显示到新闻页面
    var list = await ctx.service.news.getNewsList();

    await ctx.render('news', {
      list
    })
  }


  async content() {
    const { ctx } = this;

    var aid = ctx.query.aid;

    // console.log(aid, 111);

    // 获取数据显示到新闻页面
    var list = await ctx.service.news.getNewsContent(aid);

    // console.log(list);
    
    await ctx.render('newscontent', {
      list: list[0]
    })
    
  }
}

module.exports = NewsController;
