const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const ytdl = require("ytdl-core");
const rcon = require("../../core/rcon-cmd.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Give Music Disc your song !")
    // create a string 2 option for username and link
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("Username Minecraft")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("link").setDescription("Youtube Link").setRequired(true)
    ),

  async execute(interaction) {
    try {
      // Variable Discord
      const username_mc = await interaction.options.getString("username");
      const youtubeLink = await interaction.options.getString("link");

      // Variable Youtube
      let yotubetinfo = await ytdl.getInfo(youtubeLink);
      let format = await ytdl.chooseFormat(yotubetinfo.formats, {
        quality: "highestaudio",
      });
      // get thumbnail youtube link from best quality(last index) from list thumbnails
      let thumbnailLink = await yotubetinfo.videoDetails.thumbnails[
        yotubetinfo.videoDetails.thumbnails.length - 1
      ].url;

      const directLink = format.url;
      const description = `[Direct Download MP3](${directLink})\n> **Description**\n\`\`\`${yotubetinfo.videoDetails.description}\`\`\``;

      // Variable Minecraft Command
      // /give PhyschicWinter9 urlmusicdiscs:custom_record{display:{Name:'[{"text":"Monalisa","italic":false}]'},music_url:"https://www.youtube.com/watch?v=f6yW1Q9CXC8"} 1
      const cmdPrefix = "/give";
      const cmdUsername = username_mc;
      const cmdItem = "urlmusicdiscs:custom_record";
      // Link Youtube
      const cmdLink = `music_url:"${youtubeLink}"`;
      // Display Name Youtube
      const cmdDisplayName = `display:{Name:'[{"text":"${yotubetinfo.videoDetails.title}","italic":false}]'}`;
      // Full Command
      const cmdFull = `${cmdPrefix} ${cmdUsername} ${cmdItem}{${cmdDisplayName},${cmdLink}} 1`;

      // Variable Embed
      const musicEmbed = new EmbedBuilder()
        .setAuthor({
          name: "Music Disc Information",
          url: "https://relaxlikes.com",
          iconURL:
            "https://bestanimations.com/media/discs/895872755cd-animated-gif-9.gif",
        })
        .setTitle(`${yotubetinfo.videoDetails.title}`)
        .setURL(`${yotubetinfo.videoDetails.video_url}`)
        .setDescription(
          description.substring(0, 4096)
        )
        .addFields(
          {
            name: "Published date",
            // format date to dd/mm/yyyy
            value: `${new Date(
              yotubetinfo.videoDetails.publishDate
            ).toLocaleDateString("en-US")}`,
            inline: false,
          },
          {
            name: "Author",
            value: `${yotubetinfo.videoDetails.author.name}`,
            inline: true,
          },
          {
            name: "Estimated time",
            value: `${convertSecondsToMinutes(
              yotubetinfo.videoDetails.lengthSeconds
            )}`,
            inline: true,
          },
          {
            name: "Request by",
            // <@241391891130613760>
            value: `<@${interaction.user.id}>`,
            inline: true,
          }
        )
        // Thumbnail YT
        .setImage(`${thumbnailLink}`)
        // Skin Minecraft
        .setThumbnail(`https://mineskin.eu/avatar/${username_mc}/100.png`)
        .setColor("#00b0f4")
        .setFooter({
          text: "Made by PhyschicWinter9",
          iconURL:
            "https://cdn.discordapp.com/avatars/241391891130613760/c31bb66827ee0e51a0f25771bf0d16b5.webp?size=512",
        })
        .setTimestamp();

      let cmdResponse = await rcon.executeRconCommand(cmdFull);
      // console.log("cmdResponse: " + cmdResponse);

      if (
        cmdResponse === "Empty response from the server" ||
        cmdResponse === "Error executing RCON command" ||
        cmdResponse === "Invalid name or UUID" ||
        cmdResponse === "No player was found"
      ) {
        await interaction.reply({
          content: `Error: ${cmdResponse}`,
          ephemeral: false,
        });
      } else {
        await interaction.followUp({
          content: `Give ${yotubetinfo.videoDetails.title} Disc`,
          embeds: [musicEmbed],
          ephemeral: false,
        });
      }
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: `Error: ${error}`,
        ephemeral: false,
      });
    }
  },
};

// function to convert seconds to minutes
function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secondsRemainder = seconds % 60;
  return `${minutes}:${secondsRemainder}`;
}
