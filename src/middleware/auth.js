const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const auth = (req,res,next) => {

    try {
        // Token will be passed as headers through API 
        let token = req.headers.authorization

        if (token) {
            token = token.split(" ")[1]
            let user = jwt.verify(token, process.env.SECRET_KEY) // verifies and returns {email, id} as created during Signup
            req.userId = user.id
        } else {
            return res.status(401).json({message: "Unauthorized user"})
        }

        next()

    } catch(error) {
        console.log(error)
        res.status(401).json({message: "Unauthorized user"})
    }

}

module.exports = auth