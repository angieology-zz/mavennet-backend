
'use strict';
var Request = require('request');
const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

async function getPictures() {
    return new Promise((resolve, reject) => {
        Request.get("https://jsonplaceholder.typicode.com/photos", (error, response, body) => {
            if(error) {
                reject(error);
            }
            resolve(response);
        });
      });
}
router.get('/', async function(ctx, next) {

    const pictures = await  getPictures();
    console.log(JSON.stringify(pictures));
    ctx.body = JSON.stringify(pictures);
   });

app.use(router.routes())

app.listen(3000, () => console.log('running on port 3000'))