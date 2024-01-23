const { SlashCommandBuilder,ChannelType } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("echo your message")
    .addStringOption((option) =>
      option.setName("input").setDescription("Your message").setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The Channel echo into channel")
        .addChannelTypes(ChannelType.GuildText)
    )
    .addBooleanOption((option) =>
      option
        .setName("ephemeral")
        .setDescription("Whether or not the echo should be ephemeral")
    ),
  async execute(interaction) {
    await interaction.reply({ content: "Pong!", ephemeral: true });
  },
};
