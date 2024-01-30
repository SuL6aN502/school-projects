const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sultan:mfZbTLCooWFcHxrq@sultan.mtnwpwg.mongodb.net/Cards?retryWrites=true&w=majority');

 
const CardsModel = require("./models/Cards")

app.get("/Cards", async (req, res)=>{
    const Cards = await CardsModel.find()
    res.json(Cards);
})

app.listen(3001, ()=>{
console.log('hi');
})
