const mongoose = require('mongoose')


const CardsSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    title:{
        type:String,
    },
    schoolName:{
        type:String,
    },
    volunteerIdea:{
        type:String,
    }
})



const CardsModel = mongoose.model("Cards",CardsSchema);
module.exports = CardsModel;



