import express from "express";
import { resgiter } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", resgiter)

export default router