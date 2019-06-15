/*
*1、JavaScript语言本身只有字符串数据类型，没有二进制数据类型，定义一个Buffer类，在处理tcp流或文件流时，用来专门存放二进制数据
*   的缓存区。Buffer实例一般用于表示编码字符的序列，如UTF-8、UCS2、Base64、十六进制编码的数据
* */
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);
console.log('buf1:', buf1, 'buf2:', buf2);

const buf_es6 = Buffer.from([1, 2, 3]);
console.log('buf_es6:', buf_es6);

const buf_w = Buffer.alloc(6);
const len = buf_w.write('hello everyday!');
console.log('len:', len);

const buf_tostr = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf_tostr[i] = i + 97;
}
console.log(buf_tostr.toString('ascii', 0, 10));
