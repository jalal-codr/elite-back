const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer'); 
const path = require('path')
const app = express();
const user = require('./Models/users');
const chats = require('./Models/Chats');
const message = require('./Models/Message')
app.use(express.json());
app.use(cors({
    origin:'*',
}))

try{
    mongoose.connect("mongodb+srv://panda:panda@cluster0.zjjtilw.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("DB conected"))
}
catch(err){
    console.log(err)
}


app.post('/post-users',async(req,res)=>{
    const newUser = new user({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        address:req.body.address
    })
    newUser.save()
    .then((data)=>{
        res.send(data);
    })
})
app.get('/get-users',async(req,res)=>{
    user.find()
    .then((data)=>{
        res.send(data);
    });
})

app.post('/create-message',async(req,res)=>{
    const newMessage = new message({
        from:req.body.from,
        message:req.body.message,
    })
    newMessage.save()
    .then((data)=>{
        res.send(data)
    })
})
app.get('/get-messages',async(req,res)=>{
    message.find()
    .then((data)=>{
        res.send(data);
    })
})

app.post('/create-chat',(req,res)=>{
    const newChat = new chats({
        user:req.body.user
    })
    newChat.save()
    .then((data)=>{
        res.send(data)
    })
})
app.get('/get-chats',(req,res)=>{
    chats.find()
    .then((data)=>{
        res.send(data)
    })
})



const port = 7000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});

