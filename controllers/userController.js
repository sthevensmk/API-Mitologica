import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const JWTSecret = "apimitologiassecret";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.createUser(name, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email != undefined) {
      const user = await userService.getOne(email);
      if (user != undefined) {
        if (user.password == password) {
          jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: "48h" },
            (err, token) => {
              if (err) {
                res.status(400);
                res.json({ err: "Falha interna" });
              } else {
                res.status(200);
                res.json({ token: token });
              }
            }
          );
        } else {
          res.status(200);
          res.json({ token: token });
        }
      } else {
        res.status(401);
        res.json({ err: "Email ou senha incorretos!" });
      }
    } else {
      res.status(400);
      res.json({ err: "E-mail inválido!" });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser };
