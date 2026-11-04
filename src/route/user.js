import express from "express";
import { LogInUser, registerUser } from "../controller/user.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LogInUser)

export default router;