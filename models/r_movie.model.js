import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
     
    title: { type: String }, 
    language: { type: String }, 
    duration: { type: String },
    catogery: { type: String }, 
    rating: { type: String }, 
    releaseDate: { type: String }, 
    certificate: { type: String },  
    cardpic: { type: String }, 
    screen:{type : String},
    pic: { type: String }, 
    pic1:{type:String}
});


export default mongoose.model.movies||mongoose.model('movies',movieSchema)


