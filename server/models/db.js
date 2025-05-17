import mongoose from "mongoose";

import { Schema,Types } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength:[2, 'first name must have minimum 3 characters'],
        maxLength:[10,'first name must have maximum 10 characters']
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        minLength:[2, 'last name must have minimum 3 characters'],
        maxLength:[10,'last name must have maximum 10 characters']
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        match: [/.+@.+\..+/,'Enter valid email']
    } ,
    password: {
        type: String,
        required: true,
        trim: true,
        // minLength:[8,'Password must have minimum 3 characters'],
        // maxLength:[12,'Password must have maximum 12 characters']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }},
    {timestamps: true }
);

const User = mongoose.model('User',userSchema)


const ListingSchema = new Schema({
    title: {
        type: String,   
        required:true,
        trim: true
    },
    location:{
        type: String,
        required:true,
        trim: true
    },
    price:{
        type: Number,
        required:true,
        trim: true
    },
    image:{
        type: [String],
        required:true,
        trim: true},

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    }},
    {timestamps: true }
)

const Listing = mongoose.model('Listing',ListingSchema)

const bookingSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    listingId: {type: mongoose.Schema.Types.ObjectId, ref:'Listing'},
    checkInDate: Date,
    checkOutDate: Date
})


const Booking = mongoose.model('Booking', bookingSchema)

export {User, Listing, Booking}