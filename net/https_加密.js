// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createSever(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello World');
}).listen(10003);



