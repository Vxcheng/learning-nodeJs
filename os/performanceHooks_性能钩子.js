const {PerformanceObserver, performance} = require('perf_hooks');
const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
});

performance.mark('A');
obs.observe({entryTypes: ['measure']});
/*doSomeLongRunningProcess(() => {
    performance.mark('B');
    performance.measure('A to B', 'A', 'B');
});*/
const num = performance.now();
console.log('num:', num);