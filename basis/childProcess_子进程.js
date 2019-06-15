/*
* 1、Node.js以单线程模式运行，使用事件驱动处理并发，可在多核CPU上创建多个子进程实现高并发性能。
*   每个子进程有三个流对象：child.stdin、child.stdout、child.stderr。
* 2、Node提供了child_process模块来创建子进程，方法有：
*   exec-使用子进程执行命令，并缓存子进程输出，并将子进程输出以回调函数参数的形式返回。
*   spawn-使用指定的命令行参数创建新进程。
*   fork-用于在子进程中运行的模块，fork会在子进程和父进程之间建立管道，用于进程之间的通信。
*
* */

/*
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`输出：${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`错误：${data}`);
});

ls.on('close', (code) => {
    console.log(`子进程退出码：${code}`);
});
*/

// 仅限 Windows 系统
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
    console.log(data.toString());
});

bat.stderr.on('data', (data) => {
    console.log(data.toString());
});

bat.on('exit', (code) => {
    console.log(`子进程退出码：${code}`);
});



