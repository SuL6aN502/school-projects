const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    number_phone:{
        type:Number,
    },
    email:{
        type:String,
    },
    birth:{
        type:Date
    },
    national_identity:{
        type:Number,
    },
    educational_level:{
        type:String,
    },
    school_class:{
        type:String,
    }
})


const UserModel = mongoose.model('Users',UserSchema)
module.exports = UserModel