const d = require('domain').create();
d.on('error', (er) => {
    console.log(`error, but oh well ${er.message}`);
});
d.run(() => {
    require('http').createServer((req, res) => {
        console.log('服务已启动');
        handleRequest(req, res);
    }).listen(10002);
});