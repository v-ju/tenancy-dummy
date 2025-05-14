import express from 'express';
import { login, signup } from "../../../controller/userController.js"
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import { User } from '../../../models/db.js';
const userRouter = express.Router();


userRouter.post('/signup', signup)

// user logsin
userRouter.post('/login',login)

//userRouter.post('/logout',)

// // user updates login field data
userRouter.put('/update', authenticate, authorizeRoles(["admin","user"]),async (req,res)=>{
    const updateBody = updateUserSchema.safeParse(req.body);
    if(!updateBody.success){
        return res.status(403).json({message:'Error while updating information.'})
    }
    await User.updateOne({_id: req.user._id}, updateBody.data)

    return res.status(200).json({message:'User updated successfully!'})

})

userRouter.get('/dashboard', authenticate, authorizeRoles(["user","admin"]), async(req,res) => {
        try{
            const userId = req.user.userId;
            const user = await User.findById(userId).select('-password')

    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
        }catch(err){
            res.status(500).json({ message: 'Server error' });
        }

        //res.json({message: "dashboard"})
    }
)

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