import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
    mongodb: {
        mongodbUsername: process.env.MONGODB_USERNAME,
        mongodbPassword: process.env.MONGODB_PASSWORD,
        mongodbURL: process.env.MONGODB_URL
    },
    port: process.env.PORT,
    bcryprt: {
        saltRounds: process.env.SALT_ROUNDS,
    },
    jwt: {
        jwtSecretKey: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.EXPIRE_IN,
    },
}