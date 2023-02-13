const { REST, Routes } = require("discord.js")


const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env




const fs = require("node:fs")
const path = require("node:path")
const { CLIENT_RENEG_WINDOW } = require("node:tls")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({version: "10"}).setToken(TOKEN);

const CLIENT_ID = '1074424512688427008';
const GUILD_ID = '849566412599066676';

(async () =>{
    try {
        console.log('Resetando ${commands.length} comandos...')

        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log("Comando registrado com sucesso!")
    }
    catch (error) {
        console.error(error)
    }
})()
