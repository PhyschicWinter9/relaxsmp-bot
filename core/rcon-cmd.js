const rconHandler = require("./rcon");
const dateTime = require("./datetime.js");

let timenow = dateTime.getDateTime();

async function executeRconCommand(command) {
  try {
    if (command === undefined) {
      return "No command provided";
    }

    let response = await rconHandler.sendCommand(command);

    if (response === undefined || response.trim() === "") {
      return "Empty response from the server";
    }

    return `${timenow} : ${response.trim()}`;
  } catch (error) {
    console.error("Error executing RCON command:", error.message);
    return "Error executing RCON command";
  }
}

// Export the executeRconCommand function
module.exports = { executeRconCommand };
