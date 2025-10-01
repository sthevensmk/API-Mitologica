import express from "express";
const mitologiaRouter = express.Router();
import mitologiaController from "../controllers/mitologiaController.js";
import Auth from "../middleware/Auth.js";

mitologiaRouter.get("/mitologias", Auth.Authorization, mitologiaController.getAllMitologias);

mitologiaRouter.post("/mitologias", Auth.Authorization, mitologiaController.createMitologia);

mitologiaRouter.delete("/mitologias/:id", Auth.Authorization, mitologiaController.deleteMitologia);

mitologiaRouter.put("/mitologias/:id", Auth.Authorization, mitologiaController.updateMitologia);

mitologiaRouter.get("/mitologias/:id", Auth.Authorization, mitologiaController.getOneMitologia);

export default mitologiaRouter;
