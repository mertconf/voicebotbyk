﻿const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { TOKEN } = require("../config.json");
//lourity
module.exports = async (client) => {

  const rest = new REST({ version: "10" }).setToken(TOKEN || process.env.token);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }

  console.log(`${client.user.tag} Aktif!`);

  setInterval(async () => {

    const activities = ["Sesli Destek Botu - Lourity <3", "Sorunlarını çözmek için buradayım"] // benimkinide çözebilsen keşke bot
    const random = activities[
      Math.floor(Math.random() * activities.length)];
    client.user.setActivity(`${random}`)
  }, 16000);
};
