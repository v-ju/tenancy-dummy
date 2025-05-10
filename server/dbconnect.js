import mongoose from "mongoose";
import 'dotenv/config';
const connectDB = async() =>{
    try{
        // const MONGO_URL = process.env.MONGO_URL;
        // console.log(MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connection State:", mongoose.connection.readyState);
        console.log("MongoDB connected");

        // try {await User.create({
        //     firstName: "Admin",
        //     lastName: "User",
        //     email: "email@email.com",
        //     password:"hashed@12"
        // }),console.log("dummy user created.")}
        //     catch(e){
        //     console.log("error creating user:",e)
        // }

        
    }catch(error){
        console.log('MONGO connection failed', error);
        process.exit(1);
    }
}

export default connectDB;