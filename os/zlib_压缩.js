// zlib是通过gzip、deflate、inflate实现的压缩功能
const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('temp.txt');
const out = fs.createWriteStream('temp.txt.gz');

inp.pipe(gzip).pipe(out);








