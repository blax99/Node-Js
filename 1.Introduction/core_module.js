const http = require('http')
http.createServer((req, res)=>{
    res.end('hello');
}).listen(4800);

const file = require('fs')
file.writeFileSync('file.txt', "File created successfully!!");

const os = require('os')
console.log(os.hostname());
