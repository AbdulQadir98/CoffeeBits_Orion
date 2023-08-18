const User = require("../models/auth.models.js");
const authException=require("../exceptions/index.js")

// const login = async () => {
//     try {
//       const users = await User.findAll();
//       return users;
//     } catch (error) {
//       throw new Error("Error fetching users from the database");
//     }
//   };


const login = async () => {
    try {
    //   const users = {"name":"shakir"};
    //   return users;
    throw authException.createBookingError("wada karanne harineh na bn")
    } catch (error) {
        throw error
    }
  };

  module.exports={login}