const userData = [{
    name:'Adam Chaudhary',
    age: 22,
    email: 'adam2025@gmail.com'
},{
    name:'Alex Prakash',
    age: 21,
    email: 'alex2024@gmail.com'
},{
    name:'Peter Roy',
    age: 23,
    email: 'peter2022@gmail.com'
}]

const http = require('http')
const { stringify } = require('querystring')
http.createServer((req, res)=>{
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(userData))
    res.end()
}).listen(6100)


