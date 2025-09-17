const mongoose = require("mongoose");

// les configs db
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://sohanechamen_db_user:4zeIaWqQyFUAB3LA@mycontactcluster.mmmlkqq.mongodb.net/?retryWrites=true&w=majority&appName=myContactCluster";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connexion à MongoDB réussie");
    console.log(`Base de données: ${mongoose.connection.name}`);

    mongoose.connection.on("error", (err) => {
      console.error("Erreur MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB déconnecté");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("MongoDB reconnecté");
    });
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
