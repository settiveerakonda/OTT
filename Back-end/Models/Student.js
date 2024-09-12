import mongoose from "mongoose";
const Schema = mongoose.Schema

const student = new Schema({
    // userdata
    UserName:{
        type:String,
        Required:true
    },
    Email :{
        type:String,
        Required:true
    },
    Password:{
        type:String,
        Required:true
    },

})
export default mongoose.model('students',student)