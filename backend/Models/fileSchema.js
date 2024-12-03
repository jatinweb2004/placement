import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    topic : 
    {
        type:String,
        required:true
    },
    name : 
    {
        type:String,
        required:true
    },
    year :
    {
        type:String,
        required:true
    },
    description :
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

})

const File = mongoose.model("File",fileSchema);
export default File;