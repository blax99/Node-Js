import express from 'express'

const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/profile',(req,res)=>{    
    res.setHeader('Set-Cookie',"login=true")
    res.setHeader('Set-Cookie',"name="+req.body.name)

    res.render('profile')
})

app.get('/',(req,res)=>{
    let cookiesData = req.get('cookie')
    let cookieData = cookiesData.split(";")
    let user = cookieData[1].split('=')
    
    res.render('home',{name:user[1]})
})

app.listen(4500)