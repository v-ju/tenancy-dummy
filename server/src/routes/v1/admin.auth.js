import express, { Router } from 'express';
const adminRouter = Router();

adminRouter.get('/',(req,res)=>{res.send('admin')})


export default adminRouter