import express, { Router } from 'express';
const adminRouter = Router();
import { authenticate,authorizeRoles } from '../../middleware/authMiddleware.js';
import { getUser, getListings } from '../../../controller/userController.js';

adminRouter.get('/dashboard', authenticate, authorizeRoles(["admin"]), getUser)
adminRouter.get('/listings', authenticate, authorizeRoles(["admin"]), getListings)
// adminRouter.post('/listing',authenticate, authorizeRoles(["admin"]),createListing)
export default adminRouter
