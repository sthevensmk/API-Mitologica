import mongoose from "mongoose";

const charactersSchema = new mongoose.Schema({
  name: String,
  symbols: String,
  summary: String
})

const MitologiaSchema = new mongoose.Schema({
  name: String,
  origin: String,
  period: String,
  summary: String,
  characters: [charactersSchema]
});

const Mitologia = mongoose.model("Mitologia", MitologiaSchema);

export default Mitologia;

/*
{
  name,
  origin,
  period,
  summary,
  characters: 
  [
    {
      name,
      symbols,
      summary
    }
  ]
}
*/

/*
{
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Zeus",
      "symbols": "Raio, águia, carvalho",
      "summary": "Rei dos deuses do Olimpo, governava o céu e os fenômenos atmosféricos."
    },
    {
      "name": "Atena",
      "symbols": "Coruja, oliveira, lança e escudo",
      "summary": "Deusa da sabedoria, da estratégia militar e das artes."
    }
  ]
}
*/

