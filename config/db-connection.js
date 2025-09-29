import mongoose from "mongoose";

const dbUser = "sthevenskonesukmiranda_db_user";
const dbPassword = "ofMmdhpQ02WZEzPM";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rwaqijj.mongodb.net/api-mitologica?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar no MongoDB.");
  });
  connection.on("open", () => {
    console.log("Conexão com o MongoDB deu certo!");
  });
};

connect();
export default mongoose;
