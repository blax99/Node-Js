import express from 'express'
import multer from 'multer'
const app = express()

app.get('/',(req, res)=>{
    res.send(`
        <form method='POST' action='/upload' enctype='multipart/form-data'>
        <input type='file' name='myFile'>
        <button>Upload File</button>
        </form>
        `)
})

// Configure Storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '9.NodeJs_Features/uploads')
    },
    filename: (req, file, cb)=>{
        cb(null,file.originalname)
    }
}) 

const upload = multer({storage})


app.post('/upload', upload.single('myFile'),(req, res)=>{
    res.send({
        message:'File uploaded',
        info:req.file
    })
})

app.listen(5400)