const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect();
const sql = 'SELECT * FROM article;';
connection.query(sql, (err, result) => {
    if (err) {
        console.log('SELECT ERR:', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('--------------------------VALUES---------------------------\n\n');
});

const sql_add = 'INSERT INTO article(id,title) VALUES(?,?);';
const params_add = [5,'菜鸟梦想'];

connection.query(sql_add,params_add,(err,result) => {
    if (err) {
        console.log('INSERT ERR:', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    console.log(result);
    console.log('---------------------------INTO----------------------------\n\n');
});

const modSql = 'UPDATE article SET title = ? WHERE id = ?';
const modSqlParams = ['菜鸟站', 1];
//改
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('----------------------------SET---------------------------------\n\n');
});

const sql_del = 'DELETE FROM article WHERE id = 2';
connection.query(sql_del,(err,result) => {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-------------------------------------------------------------\n\n');
});

connection.end();

