const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:{type:String,required:true},
    number:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true}
},{timestamps:true})

const user = new mongoose.model('user',usersSchema);

module.exports = user;