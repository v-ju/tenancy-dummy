import express from 'express';
import { login, signup } from "../../../controller/userController.js"
const userRouter = express.Router();


userRouter.post('/signup', signup)

// user logsin
userRouter.post('/login',login)

// // user updates login field data
// userRouter.put('/update',userMiddleware,async (req,res)=>{
//     const updateBody = updateUserSchema.safeParse(req.body);
//     if(!updateBody.success){
//         return res.status(403).json({message:'Error while updating information.'})
//     }
//     await User.updateOne({_id: req.userId}, updateBody.data)

//     return res.status(200).json({message:'User updated successfully!'})

// })

// userRouter.delete('/delete',userMiddleware,async(req,res)=>{
//     try {
//         const userId = req.userId
//         const deletedUser = await User.findByIdAndDelete(userId);

//         if (!deletedUser){
//             return res.status(404).json({message:'User not found.'})
//         }

//         res.status(200).json({message:'User Deleted Successfully!'})
//     } catch(e){
//         console.log('Error deleting user',e)
//         res.status(500).json(e)
//     }
// })

// // admin-user gets dashboard with listings
// userRouter.get('/dashboard',userMiddleware, async(req,res)=>{
   
//     const userId = req.userId;

//     userListings = await Listing.findById(userId).populate("userId");

// })
// //dashboard

export default userRouter;