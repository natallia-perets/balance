const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();

const router = new Router();

app.use(router.routes());

app.use(function *(){
  this.body = 'Hello from koajs';
});


app.listen(3000);
