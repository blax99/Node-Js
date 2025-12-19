import express from 'express'
import path from 'path'
const app = express()
const filePath = path.resolve('5.Middleware/Public')

app.use(express.static(filePath))

app.use(express.urlencoded({extended:false}))

app.get('/',(req, res)=>{
    res.sendFile(filePath+"/index.html")
})

app.get('/login',(req, res)=>{
    res.send(`
        <form action='/submit' method='post'>
        <input type='email' placeholder='enter email' name='email'>
        <br>
        <br>
        <input type='password' placeholder='enter password' name='password'>
        <br>
        <br>
        <button>Submit</button>
        </form>
        `)
})

app.post('/submit',(req, res)=>{
    res.send(`Data submitted!`)
    console.log(req.body);
    
})

app.listen(5400)