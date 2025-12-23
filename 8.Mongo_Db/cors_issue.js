import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/',(req, res)=>{
    res.send({
        name:"Binod Bhandari",
        age:24,
        email:"binod@gmail.com"
    })
})

app.listen(6100)