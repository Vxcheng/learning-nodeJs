/*
* 1、模块是Node.js应用程序的基本组成部分，文件与模块是一一对应的，一个Node.js文件就是一个模块，比如javascript代码、json、
*   编译过的c/c++扩展。
* */

// 在node.js中，每个文件都被视为独立的模块。
const circle = require('./moduleChild_模块');
console.log(`半径为4的圆的面积是：${circle.area(4)}`);

/*
const mySquare = new Square(2);
console.log(`mySquare的面积是：${mySquare.mianji()}`)*/

/*
const dog = new Dog();
dog.setName('阿拉');
dog.sayHello();*/
