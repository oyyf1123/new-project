/* 这个文件就是反向代理的配置文件 */

const proxy = require('http-proxy-middleware')

module.exports = function ( app ) {
  // app.use( proxy(标识符,配置))
  app.use(proxy('/ajax',{
    target: 'http://m.maoyan.com',
    changeOrigin: true 
  }))
  app.use(proxy('/index.php',{
    target: 'http://www.qinqin.net',
    changeOrigin: true 
  }))
}