import express from 'express'
import { home } from './js_file/home.js'
import { login } from './js_file/login.js'
import { submit } from './js_file/submit.js'
const app = express()

app.get('/',(req, res)=>{
    res.send(home())
})
app.get('/login',(req, res)=>{
    res.send(login())
})
app.post('/submit',(req, res)=>{
    res.send(submit())
})
app.listen(6400)
