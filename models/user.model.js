import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    username:{type: String},
    emailphone:{type:String},
    password:{type:String}
    
})

export default mongoose.model.user||mongoose.model('user',userschema)