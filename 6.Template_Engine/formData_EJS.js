import express from 'express'
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.get('/',(req, res)=>{
    res.send('<h1>Welcome to website</h1>')
})

app.get('/user-data',(req, res)=>{
    res.render('userData')
})

app.post('/submit',(req, res)=>{    
    res.render('submitData',req.body)
})

app.listen(5800)

