const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const mongoose = require('mongoose');

const dbhd  = require('doohanpub').dbhd;
const config = require('doohanpub').config;
const movieModel = require('./models/movies');

const mongoConnParas = config.get('mongoConnParas');
dbhd.connectDatabase(mongoConnParas);
movieModel.createMovieModel(dbhd.mongo);
 
const index = require('./routes/index');
const movies = require('./routes/movies');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async function(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/movies', movies.routes(), movies.allowedMethods());

app.use(router.routes());
// response

app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
});

module.exports = app;