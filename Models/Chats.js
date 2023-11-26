const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    user:{type:String,required:true},

},{timestamps:true});

const chats = new mongoose.model('chats', chatSchema);

module.exports = chats;