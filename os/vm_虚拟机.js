const vm = require('vm');
const x = 1;
const sanbox = {x: 2};
vm.createContext(sanbox); // 沙盒测试
const code = 'x += 40; var y = 17;'; // 表达式
vm.runInContext(code, sanbox);
console.log(x);
console.log(sanbox.x, sanbox.y)




