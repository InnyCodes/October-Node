import mongoose from "mongoose";
import { envConfig } from "./envConfig.js";


export const connectDB = async()=> {
    try {
        const db = await mongoose.connect(envConfig.mongodb.mongodbURL);
        if (db) {
            console.log("Mongodb connected Successfully");
        }
    } catch (error) {
        console.log(error.message);
    }
}