import express from 'express';
const router = express.Router();
import userRouter from './user.auth.js';
import adminRouter from './admin.auth.js';


router.use('/user',userRouter);
router.use('/admin',adminRouter);


export default router;

