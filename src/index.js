const express = require("express")
const app = express()
const userRouter = require("./routes/userRoutes")
const noteRouter = require("./routes/noteRoutes")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()
app.use(express.json()) // Parses the request as JSON
app.use("/users", userRouter)
app.use("/note", noteRouter)

app.get("/", (req,res) => {
    res.send("Notes API developed by THARUN BALAJI")
})

const PORT = process.env.PORT || 5000

mongoose
.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port '+PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
        