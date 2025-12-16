const fs = require('fs')
const http = require('http')

http.createServer((req, res)=>{
    fs.readFile('2.Creating_Server/web.html','utf-8',(err, data)=>{
        if(err){
            console.error(err)
            res.writeHead(500, {"content-type":"text/plain"})
            res.write("Internal server error!!")
            res.end()
            return
        }
        res.writeHead(200, {"content-type":"text/html"})
        res.write(data)
        res.end()
    })
}).listen(4900)

