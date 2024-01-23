const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('music').setDescription('Provides you with sheet music from your huge selection.'),

    async execute(interaction) {
		await interaction.reply({ content: "Pong!" , ephemeral: true});
	},
}