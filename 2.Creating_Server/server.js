const http = require('http');
http.createServer((req, res)=>{
    res.setHeader("Content-Type","text/html")
    res.write(`
        <html>
        <head>
        <title>Localweb</title>
        </head>
        <body>
        <h1>Welcome to the website!</h1>
        </body>
        </html>
        `)
    res.end()
}).listen(4800)