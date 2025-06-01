import express, { Router } from 'express';
const adminRouter = Router();
import { authenticate,authorizeRoles } from '../../middleware/authMiddleware.js';
import { getUser, getListings, createListing } from '../../../controller/userController.js';
import { upload } from '../../../controller/upload.js';

adminRouter.get('/dashboard', authenticate, authorizeRoles(["admin"]), getUser)

adminRouter.get('/listings', authenticate, authorizeRoles(["admin"]), getListings)

adminRouter.post('/listing',authenticate, authorizeRoles(["admin"]),upload.array('image', 10),createListing)

export default adminRouter
