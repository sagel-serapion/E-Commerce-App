
import { request } from 'express';
import Product from '../model/product-schema.js';

// function to get products 
export const getProducts = async(request,response) =>{
    try{
         
        const products= await Product.find({}); // fetch all products from the database

        response.status(200).json(products); // send the products as a response


    }catch(err){
        response.status(500).json({message:err.message}); // send error message if any error occurs

    }
}

export const getProductById = async (request,response) => {
    try{
        const id =request.params.id;
        const product = await Product.findOne({'id' : id})
        response.status(200).json(product);

    }catch(err){
        response.status(500).json({ message : err.message})

    }
}