// Public API
const async_hooks = require('async_hooks');

const asyncHook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) { },
    destroy(asyncId) { }
});

console.log('async_hooks', asyncHook);
// JavaScript Embedder API
class DBQuery extends AsyncResource {
    constructor(db) {
        super('DBQuery');
        this.db = db;
    }

    getInfo(query, callback) {
        this.db.get(query, (err, data) => {
            this.emitBefore();
            callback(err, data);
            this.emitAfter();
        });
    }

    close() {
        this.db = null;
        this.emitDestroy();
    }
}