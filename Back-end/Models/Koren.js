import mongoose from "mongoose";
const Schema=mongoose.Schema
const Koren =new Schema({
    title: {
        type: String,
        required: true
    },
    heroName: {
        type: String,
        required: true
    },
    productpics: [{
        type: String,
        required: true
    }],
    anotherfile: {
        type: String,
        required: true
    }
   
})
export default  mongoose.model('Korens',Koren)