import * as service from "../service/user.service.js";

export const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    //check username and email
    const userByUsername = await service.findByUsername(newUser.username);
    if (userByUsername.length > 0)
      return next({ status: 400, message: "Username already exist!" });
    const userByEmail = await service.findByEmail(newUser.email);
    if (userByEmail.length > 0)
      return next({ status: 400, message: "Email already exist!" });
    //create user
    await service.register(newUser);
    res.status(201).json({ message: "Create user success!" });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const getAllUser = async (req, res, next) => {
  try {
    const users = await service.getAllUser();
    res.status(200).json({ message: "Get user success!", users });
  } catch (error) {
    next(error);
  }
};
export const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    //find user
    const user = await service.findById(id);
    if (user.length === 0)
      return next({ status: 404, message: "User not found!" });
    res.status(200).json({ message: "Get user success!", user: user[0] });
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userUpdate = req.body;
    //check id
    const user = await service.findById(id);
    if (user.length === 0)
      return next({ status: 404, message: "User not found!" });
    //check username and email
    const userByUsername = await service.findByUsername(userUpdate.username);
    if (userByUsername.length > 0)
      return next({ status: 400, message: "Username already exist!" });
    const userByEmail = await service.findByEmail(userUpdate.email);
    if (userByEmail.length > 0)
      return next({ status: 400, message: "Email already exist!" });
      //update user
      await service.updateUser(userUpdate,id)
      res.status(200).json({message:'Update success!'})
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const {id}= req.params
    //check id
    const user = await service.findById(id);
    if (user.length === 0)
      return next({ status: 404, message: "User not found!" });
    //delete user
    await service.deleteUser(id)
    res.status(200).json({message:"Delete success!"})
  } catch (error) {
    next(error);
  }
};
