
import User from '../model/user-schema.js';

 export const userSignup = async (request,response) => {
    try{

        const existingUser = await User.findOne({username: request.body.username});
        if(existingUser){
            return response.status(401).json({message: "Username already exists"});
        }

        console.log(request.body);
        const user = request.body;
        const newUser = new User(user);
         console.log(" new User saved");
        await newUser.save();
        console.log("User saved");

        
        response.status(200).json({message:user});

    }catch(err){
    
     console.error("Signup failed:", err);  // Add this
    return response.status(500).json({ message: err.message });
    }
}

export const userLogin = async (request,response) => {
    try{
        const user = await User.findOne({username: request.body.username, password: request.body.password});
        if(!user){
            return response.status(401).json({message: "Invalid credentials"});
        }
        response.status(200).json({data : user});
    }catch(err){
        console.error("Login failed:", err);
        return response.status(500).json({ message: err.message });
    }
}