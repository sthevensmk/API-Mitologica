import Mitologia from "../models/Mitologias.js";

class mitologiaService {
  async getAllMitologias() {
    try {
      const mitologias = await Mitologia.find();
      return mitologias;
    } catch (error) {
      console.log(error);
    }
  }

  async createMitologia(name, origin, period, summary, characters) {
    try {
      const newMitologia = new Mitologia({
        name,
        origin,
        period,
        summary,
        characters,
      });
      await newMitologia.save();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteMitologia(id) {
    try {
      await Mitologia.findByIdAndDelete(id);
      console.log(`Mitologia do ID: ${id} deletada com precisão!`);
    } catch (error) {
      console.log(error);
    }
  }

  async updateMitologia(id, name, origin, period, summary, characters) {
    try {
      const updateMitologia = await Mitologia.findByIdAndUpdate(
        id,
        {
          name,
          origin,
          period,
          summary,
          characters,
        },
        { new: true }
      );
      console.log(`Mitologia do ID: ${id} atualizada certinha!`);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneMitologia(id) {
    try {
      const mitologia = await Mitologia.findById({ _id: id });
      return mitologia;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new mitologiaService();
