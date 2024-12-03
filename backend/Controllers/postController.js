import dotenv from "dotenv";
dotenv.config({path:"config/.env"});
import Folder from '../Models/folderSchema.js'
import File from '../Models/fileSchema.js'
import Upload from '../Models/uploadSchema.js'


const addFolder = async (req,res) => {
    try{
        const {name,parent,supParent} = req.body;
        const newFolder = new Folder({
            name : name,
            parent : parent,
            supParent : supParent
        });
        const savedFolder = await newFolder.save();
        res.status(201).json(savedFolder); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}

const addFile = async (req,res) => {
    try{
        const {topic,name,year,description,parent,supParent} = req.body;
        const newFile = new File({
            topic : topic,
            name : name,
            year:year,
            description:description,
            parent : parent,
            supParent : supParent,
        });
        const savedFile = await newFile.save();
        res.status(201).json(savedFile); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}

const uploadFile = async (req,res) => {
    try{
        const {name , parent , supParent , urlFirebase} = req.body;
        const newFolder = new Upload({
            name : name,
            parent : parent,
            supParent : supParent,
            url:urlFirebase
        });
        const savedFolder = await newFolder.save();
        res.status(201).json(savedFolder); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}

const getFolder = async (req,res) => {
    try{
        
        const savedFolder = await Folder.find();
        res.status(201).json(savedFolder); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}
const getFile = async (req,res) => {
    try{
        const savedFile = await File.find();
        res.status(201).json(savedFile); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}
const getUploads = async (req,res) => {
    try{
        
        const savedUploads = await Upload.find();
        res.status(201).json(savedUploads); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}
const removeFolder = async (req,res) => {
    try{
        const {name,parent}=req.body;
        
        const x = await Folder.findOneAndDelete({name : name,parent:parent});
        const savedFolder = await Folder.find();
        res.status(201).json(savedFolder); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}
const removeFile = async (req,res) => {
    try{
        const {topic,parent}=req.body;
        
        const x= await File.findOneAndDelete({topic : topic , parent : parent});
        const savedFile = await File.find();
        res.status(201).json(savedFile); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}
const removeUploads = async (req,res) => {
    try{
        const {name,parent}=req.body;
        
        await Upload.findOneAndDelete({name : name , parent : parent});
        const savedUploads = await Upload.find();
        res.status(201).json(savedUploads); 
    }
    catch (err) {
        res.status(500).json({"msg":"error while uploading"});
    }
}

export { addFolder,addFile , uploadFile , getFile, getFolder,getUploads,removeFile,removeFolder,removeUploads};
