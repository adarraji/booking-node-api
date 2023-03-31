import express from "express";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
const router = express.Router();


router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;