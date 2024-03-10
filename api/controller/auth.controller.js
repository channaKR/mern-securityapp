import User from "../models/user.model.js";

export const signUp = async(req,res)=>{

    const { username,email,password } = req.body;
    const newUser = new User({username,email,password});
    try{
        await newUser.save();
        res.status(201).json({
            message:"User Added to the Db"
        });
    }catch(error){

        res.status(500).json({
            message:error.message
        })
    }

   
}

export const Login = (req,res)=>{
    res.json({
        message:'Login'
    });
}