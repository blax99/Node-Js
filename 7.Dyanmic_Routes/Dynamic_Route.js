import express from 'express'
const app = express()

app.get('/',(req, res)=>{
    const users = ['Anil', 'Bijay', 'Bimal', 'Anuj', 'Ujjwal'];
    let data ='<ul>'
    for(let i=0; i<users.length; i++){
        data += `<li><a href='user/${users[i]}'>${users[i]}</li>`
    }
    data += '</ul>'
    res.send(data)
})

app.get('/user/:name',(req, res)=>{
    let username = req.params.name;
    res.send(`This is ${username}'s Profile.`)
})

app.listen(5600)
