const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/runoob';
MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if (err) {
        throw err;
    }
    console.log('数据库已创建');
    const dbase = db.db('runoob');
    // 集合创建
    dbase.createCollection('site', function (err, res) {
        if (err) {
            throw err;
        }
        console.log('集合创建');
        // db.close();
    });

    // 插入数据
    const obj = {name: '菜鸟教程', url: 'www.runoob'};
    dbase.collection('site').insertOne(obj, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('文档插入成功');
    });

    // 查询数据
    const whereStr = {'name': '菜鸟'};
    dbase.collection('site').find(whereStr).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log('查询成功：', result);
    });

});



