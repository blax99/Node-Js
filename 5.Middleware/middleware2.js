import express from 'express'
const app = express()

app.use((req, res, next) => {
    console.log('user is accessing '+req.url+' Page');
    next()
})

app.get('/', (req, res) => {
    res.send('this is home page')
})
app.get('/about', (req, res) => {
    res.send('this is about page')
})
app.get('/contact', (req, res) => {
    res.send('this is contact page')
})

app.listen(5400)

