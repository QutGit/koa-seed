// var database = require('./database');

var path = require('path');

module.exports = {

  // 服务端口
  port: 7777,

  // 模板是否缓存
  templateCache: false,

  // 静态域名地址
  shost: 'http://front.qdingnet.com',

  // Web接口域名
  whost: 'http://boss.qdingnet.com',

  // favicon路径
  favicon: path.resolve(__dirname, '../favicon.ico')

};