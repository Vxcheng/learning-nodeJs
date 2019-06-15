/*
* date：2019.06.12
* author：cheng
* content：node.js基本语法学习，搭建http服务，实现socket编程，npm包管理工具使用
* */

// node命令行 node [options] [V8 options] [script.js | -e "script" | - ] [arguments]
/*
* Node.js 是一个基于Chrome V8引擎的Javascript 运行环境，Node.js使用了一个事件驱动、非阻塞式I/O模型，
* 使其轻量又高效，Node.js的包管理库npm，是全球最大的开源库生态系统。
* */
const http = require('http');
const hostname = '127.0.0.1';
const port = 10001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world! \n');
});
// 端口监听
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
});
