import mongoose from "mongoose";
const Schema=mongoose.Schema
const Search =new Schema({
    title:{
        type:String,
        required:true
    },    
    heroName :{
        type:String,
        required:true
    },
    productpic:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('Searchs',Search)