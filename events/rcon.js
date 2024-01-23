require('dotenv').config(); 
const { Events } = require('discord.js');
const { Rcon } = require('rcon-client');

module.exports = {
	name: Events.ClientReady,
	async execute(interaction){
        const rcon = new Rcon({
            host: process.env.RCON_HOST,
            port: process.env.RCON_PORT,
            password: process.env.RCON_PASSWORD,
        })


    
        try {
            console.log("====================================");
            console.log("RCON_HOST: " + process.env.RCON_HOST);
            console.log("RCON connecting...");
            console.log("");

            rcon.on("connect", () => console.log("RCON connected"));
            rcon.on("authenticated", () => console.log("RCON authenticated"));
            // rcon.on("end", () => console.log("RCON connection ended"));

            await rcon.connect();

            // Log some information about the Minecraft server
            // console.log(await rcon.send("list"));

            // You can add more RCON commands or interact with the server here
            console.log("RCON Connect Success!");


        } catch (error) {
            console.error("Error interacting with RCON:", error);
        } finally {
            // Ensure that you always close the RCON connection
            rcon.end();
        }
    }
};