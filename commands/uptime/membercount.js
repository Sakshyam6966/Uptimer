const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "membercount",
  description: "Count The Server Members",
  category: "uptime",
  aliases: ["mc"],
  ownerOnly: false,
  run: async(client, message, args) =>{
    const mc = new MessageEmbed()
    .setColor('GREEN')
    .setTitle('Members')
    .setDescription(`> ${message.guild.memberCount}`)
    .setTimestamp();
    message.channel.send(mc)
  }
}