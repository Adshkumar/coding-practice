const usermodel = require("../models/user.model.js")
const {errorHandler} = require("../utils/error.js")

modeule.exports.registerUser = async(req, res, next) => {

    try {
        const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "all fields is required"});
    }

    const isUserExist = await usermodel.findOne({email});

    const hasedpassword = await usermodel.hasedpassword(password);

    const user = await userService.createUser({
        name,
        email,
        password: hasedpassword
    });

    const token = user.generateAuthToken();

    res.status(201).cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
    }).json({
        message: "user is registered successfully",
        user,
        token
    })
    } catch (error) {
        console.log(error);
        next(errorHandler(500, "user registration failed"))
    }  
} 