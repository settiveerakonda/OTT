
import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer' 
import bodyParser from 'body-parser';//npm i body parser
import cors from"cors";//npm i cors
import Student from './Models/Student';
import multer from 'multer';
import product from './Models/product';
import Aha from './Models/Ahas';
import Koren from './Models/Koren';
import Show from './Models/Show';
import Marval from './Models/Marval';
import Search from './Models/Search';
import Short from './Models/Shortvideo';
import Ramcharan from './Models/Ramcharan';
import Pawan from './Models/Pawan';
import Prabash from './Models/Prabash';
 import AlluArjun from './Models/AlluArjun';
// import imageModel from './Models/models'
//const express = require('express')
const app = express()
// var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/images',express.static('public/images'))
    mongoose.connect('mongodb+srv://settiveera9652:H5bypsDMVWzzOkaW@cluster0.qvbwjlp.mongodb.net/IMG?retryWrites=true&w=majority')
    .then(()=>app.listen(4000))
    .then(()=>
    console.log("connected to database & listening to localhost 4000")  //H5bypsDMVWzzOkaW
)
.catch((err)=>console.log(err));
//http://localhost:5000/postdata


//products

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })
//add product 
app.post("/addproduct", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new product({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});

// video will be import

app.get('/getallproduts',async(req,res,next)=>{
  let productsdata; 
  try{
      productsdata=await product.find();
  }catch(err){
      console.log(err);
  }
  if(!productsdata){

      return res.status(404).json({message:"no student found."})

  }
  return res.status(200).json(productsdata)
})

//Movies get in Api
app.get('/Movie',(req,res,next)=>{
  Api.find()
  .then(apis => res.json(apis))
  .catch(err => res.json(err))
})


// register
app.post    ('/adddata',async (req,res,next)=>{          
    console.log(req.body)//form data from the frontend
    const{UserName,Email,Password}=req.body
    const student =new Student({ 

        UserName,
        Email,
        Password,    
    })
    try{
  student.save();
    }
    catch(err){
        console.log(err)
    }
    // await student.save().then(response=>{console.log(response)}).catch(err=>{console.log(err)})
    return res.send("OK")
   
})


//login
app.post("/auth", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const data = await Student.findOne({ Email });

    if (!data) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (Password === data.Password) {
      return res.status(200).json({ data });
    } else {
      return res.status(400).json({ msg: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

app.get('/usercount', async (req, res) => {
  try {
    const count = await Student.countDocuments();
    res.json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user count");
  }
});

//Aha importing

app.post("/Aha", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Aha({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});


//Aha output
app.get('/Ahaoutput',(req,res,next)=>{
  Aha.find()
  .then(Ahas => res.json(Ahas))
  .catch(err => res.json(err))
})

// koren import
// app.post("/Koren",upload.single("myfile"),async(req, res, next)=>{
//   const productpic=(req.file)? req.file.filename:null
//   //console.log(req.body.formdata)
//   const {title,heroName} =req.body
//   const prod = new Koren({
//       title,
//       heroName,
//       productpic,
//     })
//   try{
//       prod.save()//for saving the data into the database
//       return res.status(200).json({ message: 'Product added to cart successfully' });
//   }catch(err){
//          return res.status(400).json({message:"not uploaded"})
//   }      
// })

app.post("/Koren", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Koren({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});




//output
app.get('/Korenoutput',(req,res,next)=>{
  Koren.find()
  .then(Korens => res.json(Korens))
  .catch(err => res.json(err))
})

/// Koren.20 import
app.post("/Show", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Show({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});
/// output of shows
app.get('/Showp',(req,res,next)=>{
  Show.find()
  .then(Shows => res.json(Shows))
  .catch(err => res.json(err))
})

// searchbar
app.post("/Search",upload.single("myfile"),async(req, res, next)=>{
  const productpic=(req.file)? req.file.filename:null
  //console.log(req.body.formdata)
  const {title,heroName} =req.body
  const prod = new Search({
      title,
      heroName,
      productpic,
    })
  try{
      prod.save()//for saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  }catch(err){
         return res.status(400).json({message:"not uploaded"})
  }      
})

app.get('/OutputSearch',(req,res,next)=>{
  Search.find()
  .then(Searchs => res.json(Searchs))
  .catch(err => res.json(err))
})


//short videos
app.post("/Shorts", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Short({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});


app.get('/OutputShort',(req,res,next)=>{
  Short.find()
  .then(Shorts => res.json(Shorts))
  .catch(err => res.json(err))
})

//marval input

app.post("/Marval", upload.array('myfiles'), async (req, res) => {
  const { title, heroName } = req.body;

  if (!title || !heroName || !req.files) {
    return res.status(400).send("Please provide all required fields and files.");
  }

  try {
    const images = req.files.filter(file => file.mimetype.startsWith('image/')).map(file => file.path);
    const videos = req.files.filter(file => file.mimetype.startsWith('video/')).map(file => file.path);

    const prod = new Marval({
      title,
      heroName,
      images,
      videos
    });

    await prod.save();

    res.status(200).json({
      message: "Files uploaded and data saved successfully!",
      data: prod
    });
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

app.get('/OutputMarval',(req,res,next)=>{
  Marval.find()
  .then(Marvals => res.json(Marvals))
  .catch(err => res.json(err))
})


app.post("/Ramcharan", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Ramcharan({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});
app.get('/Ramcharano/p',(req,res,next)=>{
  Ramcharan.find()
  .then(Ramcharans => res.json(Ramcharans))
  .catch(err => res.json(err))
})

/// pawankalyan
app.post("/Inputpawan", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Pawan({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});
app.get('/Outputpawan',(req,res,next)=>{
  Pawan.find()
  .then(Pawans => res.json(Pawans))
  .catch(err => res.json(err))
})

//prabash
app.post("/Inputprabash", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new Prabash({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});
app.get('/Outputprabash',(req,res,next)=>{
  Prabash.find()
  .then(Prabashs => res.json(Prabashs))
  .catch(err => res.json(err))
})


app.post("/Inputallu", upload.fields([{ name: 'myfile', maxCount: 10 }, { name: 'anotherfile', maxCount: 1 }]), async (req, res, next) => {
  const productpics = req.files.myfile.map(file => file.filename);
  const anotherfile = req.files.anotherfile[0].filename;
  const { title, heroName } = req.body;
  const prod = new AlluArjun({
      title,
      heroName,
      productpics,
      anotherfile
  });

  try {
      await prod.save(); // Saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (err) {
      return res.status(400).json({ message: "Not uploaded" });
  }
});
app.get('/Outputallu',(req,res,next)=>{
  AlluArjun.find()
  .then(Allus => res.json(Allus))
  .catch(err => res.json(err))
})