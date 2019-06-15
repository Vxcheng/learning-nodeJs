/*
* 1、Stream是一个抽象接口，有四种基本类型：readable、writable、duplex、transform。所有的Stream对象都是EventEmitter的实例，
*   常用事件有：data、end、error、finish。
* 2、文件的读取流、写入流、管道流、链式流。
* */
// 从文件流中读取数据
const fs = require('fs');
let data = '';
const readerStream = fs.createReadStream('test');
readerStream.setEncoding('utf8');
readerStream.on('dat', (chunk) => {
    data += chunk;
});
readerStream.on('end', () => {
    console.log('data', data);
});
readerStream.on('error', (err) => {
    console.log('error:', err.stack);
});
console.log('文件流数据读取完毕');

// 管道流
const read = fs.createReadStream('input');
const write = fs.createWriteStream('output');
read.pipe(write);
console.log('管道流传输完毕！');

// 链式流
var zlib = require('zlib');
fs.createReadStream('input')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log('链式方法文件压缩完成');

const http = require('http');
const server = http.createServer((req, res) => {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            res.write(typeof data);
            res.end();
        } catch (e) {
            res.statusCode = 400;
            return res.end(`error: ${e.message}`);
        }
    });
});
console.log('server run success')
server.listen(10003);
