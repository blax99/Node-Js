import express from 'express'
import session from 'express-session'
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'blackcat',
    resave:false,
    saveUninitialized:false
}))

app.get('/login',(req, res)=>{
    res.render('login')
})

app.post('/profile',(req, res)=>{
    req.session.data = req.body;
    console.log(req.session.data);
    res.render('profile')
    
})

app.get('/',(req, res)=>{
    let data = req.session.data
    console.log(data);
    
    res.render('home2',{data})
})


app.listen(5400)