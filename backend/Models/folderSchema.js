import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema({
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
    }
})

const Folder = mongoose.model("Folder",folderSchema);
export default Folder;