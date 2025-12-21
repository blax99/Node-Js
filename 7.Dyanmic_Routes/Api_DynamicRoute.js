import express from 'express'
const app = express()
import ApiData from './ApiData.json' with {type:'json'}

app.get('/',(req, res)=>{  
    res.send('Welcome to website')
})

app.get('/users',(req, res)=>{
    res.send(ApiData)
})
app.get('/users/id/:id',(req, res)=>{
    let id = req.params.id;
    let data = ApiData.filter((data)=>data.id == id)
    res.send(data)
})
app.get('/users/name/:name',(req, res)=>{
    let name = req.params.name;
    console.log(name);
    let data = ApiData.filter((data)=>data.name.toLowerCase() == name.toLowerCase())
    res.send(data)
})

app.listen(5900)