import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import proudctRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows us to take JSON data in the req.body

app.use("/api/products", proudctRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});