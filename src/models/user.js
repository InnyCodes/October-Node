import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim:true,
        minLength: [3, "FirstName must at least be 3 Characters"],
        maxLength: [16, "FirstName can not greater than 16 Characters"]
    },
    lastName:{
        type: String,
        trim:true,
        minLength: [3, "lastName must at least be 3 Characters"],
        maxLength: [16, "lastName can not greater than 16 Characters"]
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
        lowercase: true,
    },
    password:{
        required: [true, "Password is Required"],
        type: String,
        minLength: [8, "Password must be at least 8 character long"]
    },
    role:{
        type: String,
        required: true,
        default: "user",
        enum: ["user", "admin"]
    }
})

const user = mongoose.model("user", userSchema)
export default user