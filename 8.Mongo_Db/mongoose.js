import mongoose from "mongoose";
import express from 'express'
import { studentModel } from "./Model/studentModel.js";
const app = express()
app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log('_______Connected__________');
})

app.get('/',async(req, res)=>{
    let result = await studentModel.find()
    res.send(result)
})

app.post('/save',async (req ,res)=>{
    let data = req.body;
    let {name, age, email} = req.body
    if(!name || !age || !email ){
        res.status(404).send({
            message:'Error occured!',
            success:false,
            result:null
        })
        return false
    }
    const studentData = studentModel.create(req.body)

    res.send({
            message:'Data stored',
            success:true,
            result:data
        })
    
})

app.put('/update/:id',async (req, res)=>{    
    let id = req.params.id
    console.log(req.body,id);
    let studentData = await studentModel.findByIdAndUpdate(id,{
        ...req.body
    })
    res.send({
        message:"Data updated",
        success:true,
        info:studentData
    })
})

app.delete('/delete/:id',async (req, res)=>{    
    let id = req.params.id
    let studentData = await studentModel.findByIdAndDelete(id)
    res.send({
        message:"Data deleted",
        success:true,
        info:studentData
    })
})

app.listen(4500)