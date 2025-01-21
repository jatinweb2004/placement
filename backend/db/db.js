import mongoose from "mongoose";

const Connection=async()=>{

    const URL=process.env.MONGO_URL;

    try{
        mongoose.set("strictQuery",false);
        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('database connected successfully');

    }catch(error){
        console.log('error while connecting the database',error);
    };
}
export default Connection