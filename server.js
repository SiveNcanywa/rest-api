// require('dotenv').config()


const express = require('express')
const app = express()
const mongoose =require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',(error)=>console.error('connected to Database'))

app.use(express.json)

const subscribersRouter=require('./routes/subscribers')
app.use('/subcribers' ,subscribersRouter)


app.listen(process.env.PORT || 3000,() => console.log('Server Started'))