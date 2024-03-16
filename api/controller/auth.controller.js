import User from "../models/user.model.js";

export const signUp = async(req,res,next)=>{

    const { username,email,password } = req.body;
    const newUser = new User({username,email,password});
    try{
        await newUser.save();
        res.status(201).json({
            message:"User Added to the Db"
        });
    }catch(error){

       next(error);
    }

   
}

export const Login = (req,res)=>{
    res.json({
        message:'Login'
    });
}