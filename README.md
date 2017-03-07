这是一个简单的koa小demon 配合我的另一个vue 简单实现了前后端分离（最最最简单的）


# 安装依赖
npm install

# 开启本地服务器localhost:3000
npm start

#路由

router.use('/', index.routes(), index.allowedMethods()); <br>
router.use('/movies', movies.routes(), movies.allowedMethods());<br>

#index.js
var router = require('koa-router')();<br>

router.get('/', async function (ctx, next) {<br>
  ctx.state = {<br>
    title: 'koa2 title'<br>
  };<br>
  
  await ctx.render('index', {<br>
  });<br>
})<br>
module.exports = router;<br>


#movies.js
let router = require('koa-router')();<br>
let movieModel = require('../models/movies')<br>

router.get('/', function (ctx, next) {<br>
    ctx.body = 'this a index response!';<br>
});<br>

router.get('/movie', async function (ctx, next) {<br>
    //ctx.set('Access-Control-Allow-Origin', '*');<br>
   ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080'); //跨域<br>
    ctx.body = await movieModel.getOneMovie();<br>
});<br>

router.get('/user', function (ctx, next) {<br>
    ctx.body = 'this a user response!';<br>
});<br>

module.exports = router;