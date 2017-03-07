let router = require('koa-router')();
let movieModel = require('../models/movies')

router.get('/', function (ctx, next) {
    ctx.body = 'this a index response!';
});

router.get('/movie', async function (ctx, next) {
    //ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    ctx.body = await movieModel.getOneMovie();
});

router.get('/user', function (ctx, next) {
    ctx.body = 'this a user response!';
});


module.exports = router;
