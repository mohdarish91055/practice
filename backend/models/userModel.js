import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    mob_no:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("User",userSchema);

export default User;