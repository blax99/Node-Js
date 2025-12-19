import express from 'express'
const app = express()

// function age(req, res, next) {
//     if(!req.query.age || req.query.age <18){
//         res.send('Alert ! You cannot access the Page');
//     }
//     else{
//         next()
//     }
// }
function ipCheck(req, res, next) {
    const ip = req.socket.remoteAddress;
    if (ip.includes('192.168.1.65')) {
        res.send('Alert ! You cannot access the Page');
        console.log(ip);
    }
    else{
        next()
    }
}
app.use(ipCheck)

app.get('/', (req, res) => {
    res.send('Hompe Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact page')
})
app.listen(4800)
