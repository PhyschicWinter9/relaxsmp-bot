const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Send a random gif")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif Category")
        .setRequired(true)
        .addChoices(
            { name: 'Funny', value: 'gif_funny' },
            { name: 'Meme', value: 'gif_meme' },
            { name: 'Movie', value: 'gif_movie' },
        )
    ),
    async execute(interaction) {
		const category = interaction.options.getString('category');
		// category must be one of 'gif_funny', 'gif_meme', or 'gif_movie'
    await interaction.reply({ content: category , ephemeral: true});
	},
};
