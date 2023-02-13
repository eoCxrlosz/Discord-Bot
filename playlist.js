const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder() 
     .setName("playlist")
      .setDescription("Minha playlist de trap"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/7oTWq8dWJViUTnfrxRpigG?si=c64b07bdc6a1426d")
    }
}