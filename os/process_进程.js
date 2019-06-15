// process 是一个全局变量，提供并控制当前Node.js进程，无需require()，process对象是EventEmitter的实例。
process.on('exit', (code) => {
    console.log(`即将推出，退出码：${code}`)
});
process.on('warning', (warning) => {
    console.log(warning)
});
process.abort();