/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586309517888_7988';

  // add your middleware config here
  config.middleware = [];

  // 配置 ejs 模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共的 api
  config.api = 'http://www.phonegap100.com/';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
