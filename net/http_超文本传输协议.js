const http = require('http');
const keepAliveAgent = new http.Agent({keepalive: true});
let option = null;

option.agent = keepAliveAgent;
http.request(option, onResponseCallback);
