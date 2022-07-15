import express, { json } from "express";
import doetenv from "dotenv";
import transpileRouter from "./routes/transpileRouter"
doetenv.config();
const app = express();
app.use(json())
app.use(transpileRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`connected to port: ${PORT}`))