const port = process.argv[2]
const http = require('http')
http.createServer((req, res)=>{
    console.log("portno 4900");
    res.write("<h1>Welocme to the website!</h1>")
    res.end()
}).listen(port)
