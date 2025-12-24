import { MongoClient } from "mongodb";

const url ='mongodb+srv://chaudhariikrishna1_db_user:mongodb123@cluster0.lfgvsik.mongodb.net/?appName=Cluster0'
const database = 'school'
const collection = 'students'
const client = new MongoClient(url)

client.connect().then(()=>{
    console.log('Connected......');
})

async function dbConnection(){
    let db = client.db(database)
    let collectionData = db.collection(collection)
    let result = await collectionData.find().toArray()
    console.log(result);
}

dbConnection()
