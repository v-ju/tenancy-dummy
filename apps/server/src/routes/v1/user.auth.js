import express from 'express';
import { getListings, getUser, login, signup } from "../../../controller/userController.js"
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import { User } from '../../../models/db.js';
const userRouter = express.Router();


userRouter.post('/signup', signup)


userRouter.post('/login',login)


// // user updates login field data
userRouter.put('/update', authenticate, authorizeRoles(["admin","user"]),async (req,res)=>{
    const updateBody = updateUserSchema.safeParse(req.body);
    if(!updateBody.success){
        return res.status(403).json({message:'Error while updating information.'})
    }
    await User.updateOne({_id: req.user._id}, updateBody.data)

    return res.status(200).json({message:'User updated successfully!'})

})

userRouter.get('/dashboard', authenticate, authorizeRoles(["user"]), getUser)


userRouter.get('/listings', authenticate, authorizeRoles(["user"]), getListings)

export default userRouter;
