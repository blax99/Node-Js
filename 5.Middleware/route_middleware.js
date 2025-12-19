import express from 'express'
const app = express()

function checkAgeMiddlewareRoute(req, res, next){
    if(!req.query.age || req.query.age<18){
        res.send('Alert ! you are not allowed in this site')
    }
    else{
        next()
    }
}

function checkURLRouteMiddlewareRoute(req, res, next){
    console.log('the URL is '+req.url);
    next()
}

// app.use('/contact',checkURLRouteMiddlewareRoute)

app.get('/',(req, res)=>{
    res.send('Home Page')
})

app.get('/about',checkAgeMiddlewareRoute,checkURLRouteMiddlewareRoute,(req, res)=>{
    res.send('About Page')
})

app.get('/contact',checkAgeMiddlewareRoute,checkURLRouteMiddlewareRoute,(req, res)=>{
    res.send('Contact Page')
})

app.get('/login',checkAgeMiddlewareRoute,checkURLRouteMiddlewareRoute,(req, res)=>{
    res.send('login Page')
})

app.listen(5600)
