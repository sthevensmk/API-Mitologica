import User from "../models/Users.js";

class userService {
  async createUser(name, email, password) {
    try {
      const newUser = new User({
        name,
        email,
        password,
      });
      await newUser.save();
    } catch (error) {
      console.error(error);
    }
  }

  async getOne(email) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new userService();
