import express from 'express'
const app = express()

app.set('view engine','ejs')
app.get('/',(req, res)=>{
    const users = ['Ram', 'Shyam', 'Hari', 'Gopal', 'Krishna'];
    let loggedIn;
    res.render('users',{users:users, loggedIn:true})
})

app.listen(5400)