const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")

const app = express();
mongoose.set('strictQuery', false);


// import USER ROUTERs
const userRouter = require("./routes/user.router")

// SERVER PORT
const PORT = process.env.PORT;


//MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
      console.log(req.path, "||", req.method);
      next();
});

// ROUTES
app.use("/api/users", userRouter)

mongoose.connect(process.env.DB).then(() => {
      app.listen(PORT, () => {
            console.log(`Database connected and Server is running at ${PORT}`)
      })
}).catch((err) => {
      console.log(err)
})
