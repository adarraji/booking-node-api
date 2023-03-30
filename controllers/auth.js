import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save();
        res.status(200).json("User has benn created");

    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));

        const isPassswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPassswordCorrect) return next(createError(400, "Wrong password or username!"));

        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
}