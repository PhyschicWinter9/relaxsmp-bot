const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    // Check if the interaction has already been replied to or deferred
    if (interaction.replied || interaction.deferred) {
      console.log(`Interaction already replied or deferred: ${interaction.id}`);
      return;
    }

    // Defer the reply if not already deferred
    if (!interaction.deferred) {
      await interaction.deferReply({ ephemeral: false });
    }

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      // Check if the interaction has already been replied to or deferred
      if (interaction.replied || interaction.deferred) {
        console.log(`Interaction already replied or deferred: ${interaction.id}`);
        return;
      }

      await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  },
};
