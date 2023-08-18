const authService = require("../services/auth.services.js");



const register = async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const login = async (req, res) => {
    try {
    
      const newUser = await authService.login()
      
      res.status(201).json(newUser);
    } catch (error) {
        
      res.status(error.statusCode).json({"error":error.message});
    }
  };


  module.exports={login,register}