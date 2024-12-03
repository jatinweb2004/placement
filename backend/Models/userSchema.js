import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId : 
    {
        type:String,
        required:true
    },
    password : 
    {
        type:String,
        required:true
    },
    isAuth :
    {
        type:Boolean
    }
})

const User = mongoose.model("User",userSchema);
export default User;