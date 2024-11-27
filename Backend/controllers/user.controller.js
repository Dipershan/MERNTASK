const userService = require("../services/user.service");

const register = async (req, res) => {
  try{
    await userService.createUser(req.body);

    res.status(201).send({
      message: "User created successfully",      
    });
    res.json({ message: "User Created successful!"});
  }catch (error){
    res
    .status(401)
    .json({ message: error.message || "An error occurred during register" });
  }
 
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);

    res.json({ message: "Login successful!", user: user });
  } catch (error) {
    res
      .status(401)
      .json({ message: error.message || "An error occurred during login" });
  }
};


const resetUserPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    await userService.resetUserPassword(email, password);

    res.json({ message: "Password reset successful!" });
  } catch (error) {
    res
      .status(401)
      .json({ message: error.message || "An error occurred during password reset" });
  }
};


const listUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.json({ message: "Users retrieved successfully!", users });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "An error occurred while retrieving users" });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await userService.deleteUser(userId);
    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "An error occurred while deleting the user" });
  }
};




module.exports = {
  register,
  login,
  resetUserPassword,
  listUsers,
  deleteUser
};
