const http = require('http')
const fs = require('fs')
const queryString = require('querystring')
http.createServer((req, res) => {
    fs.readFile('./2.Creating_Server/form.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" })
            res.write("Internal server error!");
            res.end()
            return
        }
        res.writeHead(200, { "content-type": "text/html" })
        if (req.url == "/") {
            res.write(data)
            res.end()
        }
        else if (req.url == "/submit") {
            const dataBody = [];
            req.on('data', (chunks) => {
                dataBody.push(chunks)
            })
            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData)
                
                let queryData = "My name is "+readableData.name+" Email is "+readableData.email;
                fs.writeFileSync("./2.Creating_Server/"+ readableData.name +".txt", queryData)
                console.log('file created');
                res.end("<h1>Data Completed</h1>")
                
                // res.end(`<h1>Data submitted!</h1>
                // <p>Username: ${readableData.name}</p>
                // <p>Email: ${readableData.email}</p>
                // `)
            })
        }
    })
}).listen(6800)
