import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouters from './route/user.route.js'

dotenv.config();

const app = express();



app.listen(process.env.PORT,()=>{
    console.log(`PORT ${process.env.PORT}`)
})

mongoose.connect(process.env.mongo)
.then(()=>
    {
        console.log("Conected to the database")
    }

)
.catch((error)=>
    {
        console.log(error)
    }
)

app.use("/api/user",userRouters);

