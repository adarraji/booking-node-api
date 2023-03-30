import User from "../models/User.js"
import bcrypt from "bcryptjs"

export const resgiter = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).json("User has benn created")

    } catch (err) {
        next(err)
    }
}