import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();


router.post("/", createHotel);
router.put("/:id", updateHotel(id));
router.delete("/:id", deleteHotel(id));
router.get("/:id", getHotel(id));
router.get("/", getHotels);

export default router;