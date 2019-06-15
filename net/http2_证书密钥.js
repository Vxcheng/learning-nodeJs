// 服务端
const http2 = require('http2');
const fs = require('fs');
const server = http2.createSecureSever({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
});

server.on('error', (err) => {
    console.log('err:', err)
});

server.on('stream', (stream, headers) => {
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end('<h2>Hello World</h2>');
});

server.listen(10002);

// 客户端

const client = http2.connect('http2://localhost:10002',{
    ca: fs.readFileSync('localhost-cert.pem')
});
client.on('error', (err) => {
    console.log('err:', err)
});

const req = client.request({ ':path': '/'});
req.on('response', (headers, flags) => {
    for (const name in headers) {
        console.log(`${name}: ${headers[name]}`)
    }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => {
    data += chunk
});
req.on('end', () => {
    console.log(`\n${data}`);
    client.close();
});
req.end();
