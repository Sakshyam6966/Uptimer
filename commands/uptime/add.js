const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const validUrl = require("valid-url");

module.exports = {
  name: "add",
  description: "*Adds Monitor To Your Project.*",
  aliases: ["host"],
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    var url = args[0];

    // CHECKS THE URL IF PROVIDED OR WRONG
    if (!url) return message.reply("Please provide a project url!");
    if (!validUrl.isUri(url)) {
      return message.channel.send("Please Provide A Vaild Url!");
    }

    // LOADING
    let waitEmbed = new MessageEmbed().setDescription(
      "<a:round_loading:849528119194157077> Please Wait..."
    );
    var messageAlert = await message.channel.send(message.author, waitEmbed);

    // CHECKS IF THE PROJECT IS ALREADY REGISTERED
    var checkIfExsists = await UrlsConfig.findOne({
      projectURL: url,
    });

    if (checkIfExsists === null) {
      // RUNS WHEN PROJECT IS NOT REGISTERED
      await UrlsConfig.create({
        authorID: message.author.id,
        projectURL: url,
        pinged: 0,
      }).then(async () => {
        // RUNS AFTER THE PROJECT STORES THE DATA IN DATABASE
        client.projects.push(url);
        try {
          // TRIES TO PING PROJECT
          await fetch(url);
        } catch (e) {
          // ERRORS HANDLING
          await UrlsConfig.findOneAndUpdate(
            { projectURL: url },
            { error: true, errorText: e.message },
            { new: true }
          );
          message.reply("Fetching Error");
        }

        // NOTIFIES WITH AN EMBED THAT PROJECT IS SUCCESSFULLY REGISTERED
        let embed = new MessageEmbed()
          .setTitle("✅ Added Succesfully!")
          .setDescription("Thanks For Using Me")
          .setColor("RANDOM")
          .setTimestamp();
        await messageAlert.edit(embed);
        return message.delete();
      });
    } else {
      // RUNS WHEN THE PROJECT IS ALREADY IN DATABASE
      let embed = new MessageEmbed()
        .setTitle(
          "<:dot:862783291655323668> Project is already Registered!"
        )
        .setDescription(
          "The Project You're Trying To Register Is Already In The Database"
        )
        .setColor("#FF0000")
        .setTimestamp();

      await messageAlert.edit(embed);
      return message.delete();
    }
  },
};
