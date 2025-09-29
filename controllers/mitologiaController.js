import mitologiaService from "../services/mitologiaService.js";
import { ObjectId } from "mongodb";

const getAllMitologias = async (req, res) => {
  try {
    const mitologias = await mitologiaService.getAllMitologias();
    res.status(200).json({ mitologias: mitologias });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno papito." });
  }
};

const createMitologia = async (req, res) => {
  try {
    const { name, origin, period, summary, characters } = req.body;
    await mitologiaService.createMitologia(
      name,
      origin,
      period,
      summary,
      characters
    );
    res.status(201).json({ message: "Mitologia criada certinho!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno patrão." });
  }
};

const deleteMitologia = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await mitologiaService.deleteMitologia(id);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Deu barba." });
  }
};

const updateMitologia = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { name, origin, period, summary, characters } = req.body;
      const mitologia = await mitologiaService.updateMitologia(
        id,
        name,
        origin,
        period,
        summary,
        characters
      );
      res.status(200).json({ mitologia });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getOneMitologia = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const mitologia = await mitologiaService.getOneMitologia(id);
      if (!mitologia) {
        res.sendStatus(404);
      } else {
        res.status(204).json({ mitologia });
      }
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default {
  getAllMitologias,
  createMitologia,
  deleteMitologia,
  updateMitologia,
  getOneMitologia,
};
