'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    
    // 通过抓取接口返回数据

    // curl 的方法可以获取远程的数据

    let api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';

    let response = await this.ctx.curl(api);

    // console.log(response.data);  // 返回的是 Buffer

    let data = JSON.parse(response.data);  // 把 Buffer 类型转换成对象 

    // console.log(data);

    return data.result;
  }

  
  // 获取新闻详情
  async getNewsContent(aid) {

    let api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;

    let response = await this.ctx.curl(api);

    let data = JSON.parse(response.data);  // 把 Buffer 类型转换成对象

    return data.result;
  }
}

module.exports = NewsService;
