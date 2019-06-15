/*
* 1、node.js是单进程单线程应用程序，但因为V8引擎提供的异步执行回调接口，通过这个接口可以处理大量的并发，
*   所以执行效率很高。 几乎每一个API都支持回调函数。 基本上所有的事件机制都是用设计模式中观察者模式实现。
*   node.js单线程类似进入一个while(true)的事件循环直到没有事件观察者退出，每一个事件都会生成一个观察者，
*   如果有事件发生就会调用该回调函数。
*   使用事件驱动模型，放入队列，有多个内置的事件，通过引入events模块，通过实例化EventEmmitrer类来绑定和
*   监听事件。
* 2、继承EventEmitter，只要是支持事件响应的核心模块都是EventEmitter的子类，javascript的对象机制是基于
*   原型的，支持部分多继承。
* */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('触发了一个事件！');
});
myEmitter.emit('event');
// 监听器传入参数与this
myEmitter.on('event', function (a, b) {
    console.log('this:', a, b, this)
});
myEmitter.emit('event', 'a', 'b');
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('这个是异步发生的', a, b);
    });
});
myEmitter.emit('event', 'a', 'b');