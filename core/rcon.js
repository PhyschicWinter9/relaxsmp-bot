// rcon.js
const { Rcon } = require('rcon-client');
const dateTime = require("./datetime.js");

let timenow = dateTime.getDateTime();


class RconHandler {
    constructor() {
        this.rcon = new Rcon({
            host: process.env.RCON_HOST,
            port: process.env.RCON_PORT,
            password: process.env.RCON_PASSWORD,
        });

        this.rcon.on("connect", () => console.log(`${timenow} RCON connected`));
        this.rcon.on("authenticated", () => console.log(`${timenow} RCON authenticated`));
    }

    async connect() {
        console.log("====================================");
        console.log(`${timenow} RCON_HOST: ` + process.env.RCON_HOST);
        console.log(`${timenow} RCON connecting...`);

        try {
            await this.rcon.connect();
            console.log(`${timenow} RCON Connected Successfully!`);
            console.log("====================================");
        } catch (error) {
            console.error(`${timenow} Error connecting to RCON:`, error);
        }
    }

    async sendCommand(command) {
        try {
            const response = await this.rcon.send(command);
            // console.log(`RCON Command Sent: ${command}`);
            console.log(`${timenow} Response: ${response}`);
            return response;

        } catch (error) {
            console.error(`Error sending command "${command}" to RCON:`, error);
        }
    }

    async disconnect() {
        // Ensure that you always close the RCON connection
        this.rcon.end();
    }
}

module.exports = new RconHandler();
