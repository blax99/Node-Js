import express from 'express'
import { userController } from './Controller/userController.js'
const app = express()

app.set('view engine','ejs')

app.get('/user',userController)

app.listen(5900)
