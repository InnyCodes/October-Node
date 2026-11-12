import express from "express";
import { addProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controller/product.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { checkRole } from "../middlewares/checkRole.js"
import { uploads } from "../utils/multer.js";

const router = express.Router();

router.post("/", uploads.single('image') ,checkAuth,addProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.patch("/:id", updateProduct)
router.delete("/:id", checkAuth, deleteProduct)

export default router;