import mongoose from 'mongoose';

const Connection = async (username, password) =>{
    try {
        const URL = `mongodb+srv://${username}:${password}@ecommerce-web.qle6zyl.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;

         await mongoose.connect(URL);
         console.log("Database connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
}


export default Connection;