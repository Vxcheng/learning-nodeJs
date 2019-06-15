const fs = require('fs');


fs.readFile('temp', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log('data:', data.toString());
});
console.log('结束');

fs.rename('temp', 'test', (err) => {
    if (err) {
        throw err;
    }
    // 使用回调链异步
    fs.stat('test', (err,stats) => {
        if (err) {
            throw err;
        }
        console.log(`文件属性： ${JSON.stringify(stats)}`);
    });
});
