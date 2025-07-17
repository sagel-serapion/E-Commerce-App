

import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';

import { getProducts ,getProductById} from '../controller/product-controller.js';






const router = express.Router();
// User Authentication Routes
router.post('/signup',userSignup) 
router.post('/login',userLogin)

// fetching products from database

router.get('/products',getProducts);
router.get('/product/:id',getProductById);



export default router;
