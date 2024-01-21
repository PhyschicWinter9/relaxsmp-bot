require('dotenv').config(); 
const { Events } = require('discord.js');
const { Rcon } = require('rcon-client');

module.exports = {
	name: Events.ClientReady,
	async execute(interaction){
        const rcon = new Rcon({
            host: "203.159.92.198",
            port: 25575,
            password: "0908672636"
        })
    
        try {
            rcon.on("connect", () => console.log("RCON connected"));
            rcon.on("authenticated", () => console.log("RCON authenticated"));
            rcon.on("end", () => console.log("RCON connection ended"));

            await rcon.connect();

            // Log some information about the Minecraft server
            console.log(await rcon.send("list"));

            // You can add more RCON commands or interact with the server here

        } catch (error) {
            console.error("Error interacting with RCON:", error);
        } finally {
            // Ensure that you always close the RCON connection
            rcon.end();
        }
    }
};