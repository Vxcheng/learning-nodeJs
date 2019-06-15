const querystring = require('querystring');

const str = querystring.parse('foo=bar&abc=xyz&abc=123&u=000', null, null, {
    decodeURIComponent: null,
    maxkeys: 0
});
console.log('parse:', str);
