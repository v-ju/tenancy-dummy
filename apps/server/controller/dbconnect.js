import mongoose from "mongoose";
import 'dotenv/config';
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)        
    }catch(error){
        console.log('MONGO connection failed', error);
        process.exit(1);
    }
}

export default connectDB;