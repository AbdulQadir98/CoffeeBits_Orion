const express = require("express");


const authRouter=express.Router()

//import controllers
const {
    register,
    login
  } = require("../controllers/auth.controller.js");


//Routes
authRouter.post("/register", register);
authRouter.get("/login", login);


module.exports = (app) => {
    app.use("/api/v1/auth", authRouter);
  };