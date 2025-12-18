const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('<h1>Welcome to the site!</h1>')
});
app.get('/about',(req, res)=>{
    res.send('<h1>About page!</h1>')
});
app.listen(5800)

