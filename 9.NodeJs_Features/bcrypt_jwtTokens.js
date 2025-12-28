import express from 'express'
import bcrypt from 'bcrypt'
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';

const saltRounds = 10;
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(cookieParser())

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
await client.connect()
const db = client.db('Form')
const users = db.collection('data')
const JwtSecretKey = '12@abcdejjjj'

app.get('/', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(404).send({ message: 'Username and Password cannot be Empty!' })
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    // console.log(hashedPassword);
    await users.insertOne({
        username,
        password: hashedPassword,
        createdAt: new Date()
    })
    res.send(`User Registered!
        <br>
        <br>
        <button><a href='/login'>Click to Login</a></button>`)
})


app.get('/login', (req, res) => {
    res.render('login2')
})


app.post('/login-check', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(404).send({ message: 'Username and Password cannot be Empty!' })
    }
    const userData = await users.findOne({ username })
    // console.log(userData);

    const comparePassword = await bcrypt.compare(password, userData.password)
    if (!comparePassword) {
        res.status(404).send({
            message: 'Login credientials did not match try again!'
        })
    }

    const token = jwt.sign(
        { userId: userData._id, userName: userData.username },
        JwtSecretKey,
        { expiresIn: "1hr" }
    )

    res.cookie('token', token, { httpOnly: true })
    res.redirect('/dashboard')
})

function auth(req, res, next) {

    const authHeader = req.cookies.token;
    // console.log(authHeader);

    if (!authHeader) return res.status(404).send('No token provided!')

    const token = authHeader

    try {
        const decoded = jwt.verify(token, JwtSecretKey)
        req.userData = decoded
        next()
    }
    catch (err) {
        res.status(401).send(`Invalid token!`)
    }
}

app.get('/dashboard', auth, (req, res) => {
    res.send(`Welcome ${req.userData.userName}`)
})

app.listen(4500)
