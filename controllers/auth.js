import User from "../models/User.js"

export const resgiter = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        await newUser.save()
        res.status(200).json("User has benn created")

    } catch (err) {
        next(err)
    }
}