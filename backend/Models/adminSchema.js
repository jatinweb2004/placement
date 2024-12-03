import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    adminId : 
    {
        type:String,
        required:true
    },
    isAuth :
    {
        type:Boolean
    }
})

const Admin = mongoose.model("Admin",adminSchema);
export default Admin;