const util = require('util');

async function fn() {
    return 'hello world';
}

const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
    if (err) {
        throw err;
    }
    console.log('你好：', ret);
});

const EventEmitter = require('events');

class MyStream extends EventEmitter {
    write(data) {
        this.emit('data', data);
    }
}

const stream = new MyStream();
stream.on('data', (data) => {
    console.log(`接收的数据：${data}`);
});
console.log('继承', stream instanceof EventEmitter);
console.log('super_:', MyStream.super_ === EventEmitter);
stream.write('使用 ES6');

