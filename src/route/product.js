import express from "express";
import { addProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controller/product.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth ,addProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;