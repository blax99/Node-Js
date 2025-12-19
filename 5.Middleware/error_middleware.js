import express from 'express'
const app = express()

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).send('Server Error ! Try again later')
}


app.get(['/','/home'],(req, res)=>{
    res.send('Home Page')
})
app.get('/user',(req, res)=>{
    res.send('User Page')
})

app.use(errorHandling)
app.listen(5900)
