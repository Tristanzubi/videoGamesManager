import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res) => {
  try {
    const user = await userRepository.create(req.body);

    if (user) {
      res.status(201).json("Congratulations, you are registered!");
    } else {
      res.status(400).json("An error occurred while registering the user.");
    }
  } catch (err) {
    res.status(500);
  }
};

export default { add };
