import express from "express";
import mongoose from "mongoose";
import Product from "../Models/product.model.js";
import {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
