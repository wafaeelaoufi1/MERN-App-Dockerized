import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// Si tu veux restreindre l'accès à ton frontend (par exemple `http://localhost:5173`), fais ceci :
const corsOptions = {
  origin: "http://localhost:5173", // Remplace par l'URL de ton frontend
  methods: "GET,POST", // Méthodes autorisées
};

app.use(cors(corsOptions));
app.use("/api/products", productRoutes);
mongoose
  .connect("mongodb://localhost:27017/mernDb")
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
