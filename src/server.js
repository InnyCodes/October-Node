import express, { json } from "express"
import { connectDB } from "./config/db.js";
import cors from "cors"
import productRoute from "./route/product.js"
import userRoute from "./route/user.js"
import { envConfig } from "./config/envConfig.js";

const port = envConfig.port;
const server = express()
server.use(cors());

server.use(json());
server.use("/product", productRoute)
server.use("/auth", userRoute)


connectDB();
server.listen(port, ()=> {
    console.log(`Server is running on port :${port}`);
})