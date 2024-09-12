import mongoose from "mongoose";
const Schema=mongoose.Schema
const Marval =new Schema({
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
anotherfile: [{
    type: String,
    required: true
} ]// Array of video paths
});
export default  mongoose.model('Marvals',Marval)