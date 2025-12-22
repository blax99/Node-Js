import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
const app = express()

const url = 'mongodb://localhost:27017'
const dbName = 'school'
const client = new MongoClient(url)

client.connect().then(async (connection)=>{
    app.set('view engine','ejs')
    let db = connection.db(dbName)
    let collection = db.collection('students')
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    app.get('/api',async (req, res)=>{
        let students = await collection.find().toArray()
        res.send(students)
    })
    
    app.get(['/ui','/'],async (req, res)=>{
        
        let students = await collection.find().toArray()
        res.render('showData',{students})
    })
    
    app.get('/form',(req, res)=>{
        res.send(`
            <form method='POST' action='/submit'>
            <input type='text' placeholder='Enter name' name='name'>
            <br>
            <br>
            <input type='number' placeholder='Enter age' name='age'>
            <br>
            <br>
            <input type='email' placeholder='Enter email' name='email'>
            <br>
            <br>
            <button>Add Student</button>
            </form>
            `)
        })

    app.post('/submit',async (req, res)=>{
        console.log(req.body);
        let students = await collection.insertOne(req.body)
        res.send('<h1>Data Submitted!</h1>')
    })

    app.post('/add-student-api',async (req, res)=>{
        // console.log(req.body);
        let {name, age, email}= req.body
        if(!name || !age || !email){
            res.send({message:"operation failed",success:false})
            return false;
        }
        let result = await collection.insertOne(req.body)
        res.send({message:"operation successfull",success:true,result:result})
    })

    app.delete('/delete/:id',async (req, res)=>{
        let id = req.params.id;
        let result = await collection.deleteOne({ _id:new ObjectId(id)})
        if(result.deletedCount === 1){
            return res.send({
                message:"recored deleted successfully!",
                success:true,
            })
        }
        else{res.status(404).send({
                message:"Error occured try again later!",
                success:false,
            })
        }
    })


    app.listen(3200)
})


