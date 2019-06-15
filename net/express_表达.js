const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});

const fs = require('fs');
app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "mock.json", 'utf8', function (err, data) {
        console.log('listUsers:', data);
        res.end(data);
    });
})
const user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};
app.get('/addUser', (req, res) => {
    fs.readFile(__dirname + "/mock.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "mock.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

const server = app.listen(10004, () => {
    const port = server.address().port;
    console.log('服务端口：', port);
});
