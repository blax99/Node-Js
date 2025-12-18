import express from 'express'
const app = express()
import path from 'path'
const filePath = path.resolve('4.ExpressJs_Basics/js_file')
const publicPath = path.resolve('4.ExpressJs_Basics/public')

app.use(express.static(publicPath));

app.get('/',(req, res)=>{
    res.sendFile(filePath+'/index.html')
})
app.get('/contact',(req, res)=>{
    res.sendFile(filePath+'/contact.html')
})
app.use((req, res)=>{
    res.status(404).sendFile(filePath+'/404.html')
})

app.listen(5800)