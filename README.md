这是一个简单的koa小demon 配合我的另一个vue 简单实现了前后端分离（最最最简单的）


# 安装依赖
npm install

# 开启本地服务器localhost:3000
npm start

#路由

router.use('/', index.routes(), index.allowedMethods());
router.use('/movies', movies.routes(), movies.allowedMethods());

#index.js
//var router = require('koa-router')();
//
//router.get('/', async function (ctx, next) {
//  ctx.state = {
//    title: 'koa2 title'
//  };
//  
//  await ctx.render('index', {
//  });
//})
//module.exports = router;


#movies.js
//let router = require('koa-router')();
//let movieModel = require('../models/movies')
//
//router.get('/', function (ctx, next) {
//    ctx.body = 'this a index response!';
//});
//
//router.get('/movie', async function (ctx, next) {
//    //ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080'); //跨域
//    ctx.body = await movieModel.getOneMovie();
//});
//
//router.get('/user', function (ctx, next) {
//    ctx.body = 'this a user response!';
//});
//
//module.exports = router;