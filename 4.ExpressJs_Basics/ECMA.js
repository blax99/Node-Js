import express from 'express'
import { about } from './js_file/about.js'
import { contact } from './js_file/contact.js'
const app = express()

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to website!</h1>")
})

app.get('/about',(req, res)=>{
    res.send(about())
})

app.get('/contact',(req, res)=>{
    res.send(contact())
})


app.listen(5400)



