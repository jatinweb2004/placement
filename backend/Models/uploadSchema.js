import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    name : 
    {
        type:String,
        required:true
    },
    parent :
    {
        type:String,
        required:true
    },
    supParent :
    {
        type:String,
        required:true
    },
    url :
    {
        type:String,
        required:true
    }
})

const Upload = mongoose.model("Upload",uploadSchema);
export default Upload;