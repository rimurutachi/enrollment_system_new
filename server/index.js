const express = require("express")
const dotenv = require("dotenv").config()
const { mongoose } = require("mongoose")
const cors = require("cors")
const app = express()

//Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected!"))
.catch((err) => console.log("Database connection failed!", err))

//Middlewares
app.use(express.json())


//Routes
app.use('/', require('./routes/authRoutes'));


const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
