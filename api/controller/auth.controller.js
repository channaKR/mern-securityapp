import User from "../models/user.model.js";

export const signUp = async(req,res)=>{

    const { username,email,password } = req.body;
    const newUser = new User({username,email,password});
    await newUser.save();
    res.status(201).json({
        message:"User Added to the Db"
    })

   
}

export const Login = (req,res)=>{
    res.json({
        message:'Login'
    });
}