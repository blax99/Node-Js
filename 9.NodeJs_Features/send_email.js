import express from 'express'
import nodemailer from 'nodemailer'
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'example@gmail.com',
        pass:'app password'
    }
})

app.get('/email',(req, res)=>{
    res.render('email')
})

app.post('/send-email',(req, res)=>{
    console.log(req.body);

    const mailOptions ={
        to:req.body.to,
        from:'chaudhariikrishna1@gmail.com',
        subject:req.body.subject,
        text:req.body.email
    }

    transporter.sendMail(mailOptions,(err, info)=>{
        if(err){
            res.status(500).send('Email operation unsuccessfull')
        }
        else{
            res.status(200).send('Email sent!')
        }
    })
})

app.listen(5400)

