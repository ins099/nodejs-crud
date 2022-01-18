const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
require('dotenv/config');

//Import Routes
app.use(bodyParser.json())
const postsRoute = require('./Routes/posts');

//Middleware
app.use('/posts',postsRoute)



//ROUTES 
app.get('/',(req,res)=>{
    res.send('we are on home');
})
//listen to server 
app.listen(3000)

//connect to DB

mongoose 
 .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true, })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

 //use cors to use this APIs for external use
 