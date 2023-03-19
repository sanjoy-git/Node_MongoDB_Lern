const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user.router");
// const config = require("config");
require("dotenv").config();

// express app initialization
const app = express();
app.use(express.json());

// app.set('view engine','ejs');

; 



// configuration
// const conName=config.get("mode");
// console.log(conName);

// const userName=config.get("dbUserName");
// console.log(userName);

// const db = config.get("mongoUrl");
// console.log(db);


// database connection with mongoose
const db=process.env.MONGO_URL;

mongoose
  .connect(db)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));


// application route
app.use(userRouter);



// default error handler
function errorHandler(err,req,res,next){
  if(res.headerSent){
    return next(err);
  }
  res.status(500).json({error:err});
}

// env file access
const port = process.env.PORT || 5000;

// server
app.listen(port, () => {
  console.log(`Server running on port port 🔥http://localhost:${port}`);
});