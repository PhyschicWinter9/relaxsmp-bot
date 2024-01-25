const { SlashCommandBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get info about a user or a server!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("Info about a user")
        .addUserOption((option) =>
          option.setName("target").setDescription("The user")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("server").setDescription("Info about the server")
    ),

  async execute(interaction) {
    const users = interaction.options.getUser("target");
    const servers = interaction.options.getSubcommand("server");

    if (users) {
      await interaction.reply(`Username: ${users.username}\nID: ${users.id}`);
    }

    // await interaction.reply({content:users})
  },
};
