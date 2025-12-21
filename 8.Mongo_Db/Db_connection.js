// using mongoDb Driver
import express from 'express'
import { MongoClient } from 'mongodb';
const app = express()

const dbName = 'school';
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConnection(){
    
}
dbConnection()

app.set('view engine','ejs')
app.get('/',async (req, res)=>{
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('students')
    const students = await collection.find().toArray()

    console.log(students);
    
    res.render('showData',{students})
    
})


app.listen(3200)
