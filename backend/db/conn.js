const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      // A senha do usuário que estava nos commits antigos foi trocada antes de expor o repositório ao público.
      `mongodb+srv://rafael2:${process.env.SENHA_DB}@cluster0.nwsqhwn.mongodb.net/?appName=Cluster0`,
    );

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro:${error}`);
  }
}
module.exports = main;
