import express, { Router } from 'express';
const adminRouter = Router();
import { authenticate,authorizeRoles } from '../../middleware/authMiddleware.js';
import { getUser } from '../../../controller/userController.js';

adminRouter.get('/dashboard', authenticate, authorizeRoles(["admin"]), getUser)


export default adminRouter
    