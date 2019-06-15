const {PI} = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;

/*
module.exports = class Square {
    constructor(width) {
        this.width = width;
    }

    mianji() {
        return this.width ** 2;
    }
};*/

// 一个狗动物对象实例
/*function Dog() {
    var name;
    this.setName = function (thyname) {
        name = thyname;
    }
    this.getName = function () {
        return name;
    }
    this.sayHello = function () {
        console.log('Hello' + name);
    }
}
module.exports = Dog;*/
