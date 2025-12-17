const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
    const headerData = fs.readFileSync('./3.Nodejs_Concepts/html/header.html', 'utf-8')
    if (req.url == '/') {
        fs.readFile('./3.Nodejs_Concepts/html/home.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": 'text/plain' })
                res.end('internal server error!')
            }
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(headerData + '' + data)
            res.end();
        })
    }
    else if (req.url == '/style.css') {
        let cssData = fs.readFileSync('./3.Nodejs_Concepts/html/style.css', 'utf-8')
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(cssData);
    }
    else if (req.url == '/about') {
        let data = fs.readFileSync('./3.Nodejs_Concepts/html/about.html', 'utf-8')
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(headerData + '' + data)
    }
    else if (req.url == '/contact') {
        let data = fs.readFileSync('./3.Nodejs_Concepts/html/contact.html', 'utf-8')
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(headerData + '' + data)
    }

    else if (req.url == '/service') {
    let data = fs.readFileSync('./3.Nodejs_Concepts/html/service.html', 'utf-8')
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(headerData+''+data);
}
}).listen(6400)

