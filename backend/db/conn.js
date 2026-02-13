const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://rafael2:ZPHIogskbibvxAJy@cluster0.nwsqhwn.mongodb.net/?appName=Cluster0",
    );

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro:${error}`);
  }
}
module.exports = main;
