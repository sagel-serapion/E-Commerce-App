
import { products } from "./constants/data.js"

import Product from './model/product-schema.js';

const defaultData = async () => {
    try {
        await Product.deleteMany({}); 
        await Product.insertMany(products);
        console.log(" data loaded successfully");
    }catch(error){
        console.log("Error while loading default data", error.message);
    }
}

export default defaultData;
