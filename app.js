const express=require('express')

const setMiddleware=require('./middleware/middlewares')
const setRoute=require('./route/route')
const app=express()




app.set('view engine','ejs')
app.set('views')

setMiddleware(app)
setRoute(app)


require('./model/database')

app.listen(1000,()=>{
    console.log('server created success')
})