const bcrypt = require("bcrypt")
const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY

const signup = async (req,res) => {
    // Check existing user, Hash password, User creation, Token generation
    const {username, email, password} = req.body

    try {

        const existingUser = await userModel.findOne({email: email}) // Execution stops here until it finishes
        if (existingUser){
            return res.status(400).json({message:"User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        // JWT token helps to identify the user and fetch the respective notes 
        // Two arguments - payload (details of user) and seceret key
        const token = jwt.sign({email: newUser.email, id: newUser._id}, SECRET_KEY)
        res.status(200).json({user: newUser, token: token})

    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

const signin = async (req,res) => {
    // Check existing user, Decrypt password 
    const {username, email, password} = req.body

    try {
        const existingUser = await userModel.findOne({email: email})
        if (!existingUser){
            return res.status(404).json({message: "User not found"})
        }
        
        const matchPassword = await bcrypt.compare(password, existingUser.password) 

        if (!matchPassword){
            return res.status(400).json({message: 'Invalid credentials'})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY)

        res.status(200).json({user: existingUser, token: token})
        
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }

}


module.exports = {signup, signin}