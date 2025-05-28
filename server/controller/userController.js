import 'dotenv/config';
import { loginSchema, signupSchema, updateUserSchema } from '../../shared/types/index.js';
import {User, Listing, Booking} from '../models/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const signup = async(req,res)=>{
    //destructure zod validated data from input fields
    //if data incorrect exit early, else hash pass and create user.
    try{
        const parsedData = signupSchema.safeParse(req.body);
        if (!parsedData.success){
        return res.status(400).json({
            message:parsedData.error.errors[0].message
        })
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password,10)

    const existingUser = await User.findOne({
        email: parsedData.data.email
    })

    if (existingUser){
        return res.status(400).json({message:'email is aleady registered!'})
    }

    await User.create({
        firstName: parsedData.data.firstName,
        lastName: parsedData.data.lastName,
        email: parsedData.data.email,
        password:hashedPassword
    })

    return res.status(200).json({message:'User registered successfully..!'})

    
    }catch(e){
        res.json({message:`${e.message}`})
    }
}
  
    

   
export const login = async (req,res)=>{
    const parsedData = loginSchema.safeParse(req.body);
    if (!parsedData.success){
    return res.status(400).json({message: `${parsedData.error.errors[0].message}`})
    }

    const user = await User.findOne({
    email: parsedData.data.email})

    if(!user){
        return res.status(400).json({
            message:'User not found'
        })
    }

    const passcheck = await bcrypt.compare(parsedData.data.password,user.password)

    if(!passcheck){
        return res.status(403).json({message:'Unauthorized Password'})
    }

    const userId = user._id;
    const role = user.role

    const token = jwt.sign({userId, role},process.env.JWT_PASS,{expiresIn: '1h'})
    return res.json({
        message:'Login Successful!',
        token,
        role
    })

}

export const getUser = async(req,res) => {
    console.log(" get user endpoint hit")
    try{
        const userId = req.user.userId;
        console.log(userId)
        const user = await User.findById(userId).select('firstName email -_id')
        console.log(user)
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json({user})
    }catch(err){
        res.status(500).json({ message: 'Server error' });
    }
}

export const getListings = async(req, res) => {
    const userId = req.user.userId;
    try{
        if (req.user.role === 'admin'){
        const listings = await Listing.find({userId});
        return res.status(200)
            .json({ message:"Admin listing fetched",
                listings,
                hasListings: listings.length > 0
            });
    } else {
        const listings = await Listing.find({});
        return res.status(200)
            .json({message:"User listing fetched",listings});
    }
    }catch(err){
        res.status(500).json({message: "Error fetching listings"})
    } 
}

// export const createListing = async(()=>{})