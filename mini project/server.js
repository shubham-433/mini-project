const express =require('express');
const http=require("http");
const app=express();
const port=80;
const path=require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: String,
    phoneNumber:String
  });
  const contact = mongoose.model('contact',contactSchema);    // model

// for express specific stuff 
app.use("/static",express.static('static'))        // "/static" is url for static folder
app.use(express.urlencoded());

// for express specific stuff 
app.use("/static",express.static('static'))        // "/static" is url for static folder
app.use(express.urlencoded());

// pug specific stuff 

app.set('view engine','hbs');


app.set('views',path.join(__dirname,'views'));          // set a view directory

// our pug demo endpoint

app.get("/",(req,res)=>{
   
    res.status(200).render('index');

});



app.get("/news",(req,res)=>{
    res.status(200).render('news')
});

app.post('/',(req,res)=>{

    var myData= new contact(req.body);
    myData.save().then(()=>{
        res.send("This item is added to data base")
    }).catch(()=>{  
        res.status(400).send("item was not save");
    });


})






app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`)
})
