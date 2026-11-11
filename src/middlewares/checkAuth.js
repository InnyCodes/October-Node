import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { envConfig } from '../config/envConfig.js'

export const checkAuth = async (req, res, next) => {
    try {
        const header = req.headers.authorization
        // console.log(header);

        if (!header) {
            res.status(401)
                .json({ status: false, message: "Token not Found" })
        }
        const token = header.split("Bearer ")[1]
        // console.log(token);

        try {
            const payload = jwt.verify(token, envConfig.jwt.jwtSecretKey)
            console.log(payload);
            const existingUser = await User.findById(payload.id)
            if (!existingUser) {
                return res.status(401).json({ status: false, message: "Unauthorized" })
            }
            req.id = payload.id
            req.role = payload.role
            next()
        } catch (error) {
            console.log(error);
            res.status(401).json({ status: false, message: error.message })
        }
    } catch (error) {
        console.log(error)
        res.staus(401).json({ status: false, message: error.message })
    }
}