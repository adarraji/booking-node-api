import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/uesrs.js";
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()
app.use(cors())
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected")
// })

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((err, req, res, next) => {
    const erroStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(erroStatus).json({
        sucess: false,
        status: err.status,
        message: errorMessage,
        stack: err.stack,
    })
})


app.listen(8800, () => {
    connect()
    console.log("Connected to backend.")
})



