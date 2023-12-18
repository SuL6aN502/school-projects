const express = require('express')
const app = express()
const port = 502

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Sultan:3anAyFaDcszKKxcT@sultan.mtnwpwg.mongodb.net/School?retryWrites=true&w=majority');




// IMPORT USER MODEL
const UserModel = require("./models/Users.js");





app.get('/Users', async (req,res)=>{
    const Users = await UserModel.find();
    res.json(Users);
})






app.listen(port, ()=>{
    console.log();
})
