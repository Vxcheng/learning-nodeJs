const { URL } =require('url');
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host,'\t');
myURL.host = 'example.com:88';
console.log(myURL.href);
