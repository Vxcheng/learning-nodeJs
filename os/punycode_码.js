// punycode 是RFC 3492 定义的字符解决方案，主要用于国际化域名。

const punycode = require('punycode');
console.log('decode:',punycode.decode('maana-pta'))
console.log('decode:',punycode.decode('mañana'))
