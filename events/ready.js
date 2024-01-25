const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {

		// set the client user's activity
		// show all the servers the bot is in activity in the bot's status
		// client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' });
		client.user.setActivity({
			type: ActivityType.Listening,
			name: `${client.guilds.cache.size} servers`,
			state: `Looking ${client.guilds.cache.size} servers`,
		})

		console.log("====================================");
		console.log(`Logged in as ${client.user.tag}`);
		console.log("====================================");
		console.log("")
	},
};