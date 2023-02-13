const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
     .setName("saudacao")
      .setDescription("Comando de saudação"),

    async execute(interaction) {
        await interaction.reply("Olá! Como posso ajudá-lo?")
    }
}