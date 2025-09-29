import express from "express";
const mitologiaRouter = express.Router();
import mitologiaController from "../controllers/mitologiaController.js";

mitologiaRouter.get("/mitologias", mitologiaController.getAllMitologias);

mitologiaRouter.post("/mitologias", mitologiaController.createMitologia);

mitologiaRouter.delete("/mitologias/:id", mitologiaController.deleteMitologia);

mitologiaRouter.put("/mitologias/:id", mitologiaController.updateMitologia);

mitologiaRouter.get("/mitologias/:id", mitologiaController.getOneMitologia);

export default mitologiaRouter;
