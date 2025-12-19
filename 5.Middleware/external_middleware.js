import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/',(req, res)=>{
    res.send('Home Page')
})

app.get('/about',(req, res)=>{
    res.send('About Page')
})

app.get('/login',(req, res)=>{
    setTimeout(() => {
        res.send('login Page')
    }, 3000);
})

app.listen(5800)


