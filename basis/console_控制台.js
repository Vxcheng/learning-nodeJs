console.log('你好世界');
// 打印: '你好世界'到 stdout。
console.log('你好%s', '世界');
// 打印: '你好世界'到 stdout。
// console.error(new Error('错误信息'));
// 打印: [Error: 错误信息]到 stderr。

/*const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('你好 word');
myConsole.log('你好%s', 'word');*/

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new Console(output, errorOutput);
// 像 console 一样使用
const count = 5;
logger.log('count: %d', count);
// stdout.log 中打印: count 5
