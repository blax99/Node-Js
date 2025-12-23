import mongoose from "mongoose";

export const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String
},{
    versionKey:false
})
