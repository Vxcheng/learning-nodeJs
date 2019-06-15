const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

setTimeoutPromise(5000,'foobar').then((value) => {
    // value === 'foobar' (passing values is optional)
    // This is executed after all I/O callbacks.
    console.log('timing', value);
});

// or with async function
async function timerExample() {
    console.log('Before I/O callbacks');
    await setTimeoutPromise();
    console.log('After I/O callbacks');
}
timerExample();