import express from "express";
import Mitologia from "./models/Mitologias.js";
import User from "./models/Users.js";
import mitologiaRoutes from "./routes/mitologiaRoutes.js";
import mongoose from "./config/db-connection.js";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", mitologiaRoutes);

// mongoose.connect("mongodb://127.0.0.1/api-mitologica");

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro: ", error);
  }
  console.log("Servidor rodando na porta ", port);
});
