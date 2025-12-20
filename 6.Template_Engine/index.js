import express from 'express'
const app = express()

app.set('view engine','ejs')

app.get('/',(req, res)=>{
    res.render('home',{name:'Krishna', age:22})
})

app.listen(5900)


