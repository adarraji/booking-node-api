import express from "express";
import { resgiter } from "../controllers/auth";
const router = express.Router();

router.get("/register", resgiter)

export default router