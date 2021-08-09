const Discord = require("discord.js")
const { MessageEmbed, Client } = require("discord.js")
const client = new Client()
const config = require("../../config");
const { MessageButton } = require("discord-buttons")
require("discord-buttons")(client);
module.exports = {
  name: "support",
  description: "*Join our Support Server For Help!*",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message) => {
   const { MessageEmbed } = require("discord.js");
   const { default_prefix } = require("./../../config.json");

    let button_public_invite = new MessageButton().setStyle('url').setLabel('Invite Public Bot').setURL("https://discord.com/oauth2/authorize?client_id=849523433657466890&permissions=8&scope=bot")
      let button_support_dc = new MessageButton().setStyle('url').setLabel('Support Server').setURL("https://discord.com/invite/sakshyam")
      let button_invite = new MessageButton().setStyle('url').setLabel('Invite This Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
      //array of all buttons
      const allbuttons = [button_public_invite, button_support_dc, button_invite]

    let mybuttonsmsg = await message.channel.send({
        embed: new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("<a:jumpheart:862765468052881409> You Need Help? **JOIN OUR SUPPORT SERVER**")
          .setDescription(`**[Invite Uptimer](https://discord.com/oauth2/authorize?client_id=849523433657466890&permissions=8&scope=bot)  •  [Support Server](https://discord.com/invite/sakshyam)**`)
          .setFooter("Uptimer", "https://images-ext-2.discordapp.net/external/TY4w5liiyJyPy5XW6ezPw2-sryc3JaZDF0zGdQWP9tk/%3Fsize%3D512/https/cdn.discordapp.com/avatars/849523433657466890/9b0cd1ae4f6ec5fe9e085b2d5d6e82c8.webp?width=410&height=410")
          .setURL("https://discord.com/oauth2/authorize?client_id=849523433657466890&permissions=8&scope=bot"),
        buttons: allbuttons
      });
  }
}