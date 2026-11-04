import express from "express";
import { addProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controller/product.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;