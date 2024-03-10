import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true,
        unique: true,
    },
    email :
    {
        type:String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true,
        set:value => bcryptjs.hashSync(value,10)
    }
},{timestamps: true})


const User = mongoose.model('User',userSchema)
export default User