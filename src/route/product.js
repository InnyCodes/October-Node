import express from "express";
import { addProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controller/product.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { checkRole } from "../middlewares/checkRole.js"

const router = express.Router();

router.post("/", checkAuth, checkRole ,addProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.patch("/:id", updateProduct)
router.delete("/:id", checkAuth, deleteProduct)

export default router;