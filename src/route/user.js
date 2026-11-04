import express from "express";
import { isAuth, LogInUser, registerUser } from "../controller/user.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LogInUser)
router.get("/me", checkAuth, isAuth);

export default router;