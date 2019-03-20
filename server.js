const Koa = require('koa');
const static = require('koa-static');
const history = require('connect-history-api-fallback');
const fs=require('fs');

// 路由
const {PORT}=require('./config.json');

// 创建koa应用
const app = new Koa();//app.context



// 创建静态资源服务
app.use(static('./'))

app.use((ctx,next)=>{
	let content=fs.readFileSync("index.html","utf-8");
	ctx.static==200;
	ctx.type="text/html;charset-utf-8"
	ctx.body=content
})
// 监听端口
app.listen(3006,()=>{
    console.log('server is running on http://localhost:3006');
})