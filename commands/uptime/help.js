const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");
const { MessageButton, MessageActionRow } = require("discord-buttons")


module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discord.com/api/oauth2/authorize?client_id=849523433657466890&permissions=2147875904&scope=bot";
    let how_to = "https://youtu.be/VEjDuRitU4A";


    let mybutton = new MessageButton()
      .setStyle('url')
      .setLabel("Invite Link")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=849523433657466890&permissions=2147875904&scope=bot")
      .setEmoji("872032870099714088")
      let mybutton2 = new MessageButton()
      .setStyle('url')
      .setLabel("Support Server")
      .setEmoji("872035574427578398")
      .setURL("https://discord.gg/ghQ64n9h")
    let mybutton1 = new MessageButton() // prettier
      .setStyle('url')
      .setLabel("Tutorial Video")
      .setURL("https://youtu.be/VEjDuRitU4A")
      .setEmoji("872035032846454805")



    const commands = client.commands
      .filter((c) => c.ownerOnly === false)
      .map((cmd) => `> \`${default_prefix}${cmd.name}\` - ${cmd.description}`);

    const contents =
      "<a:un_arrow1:851463725688160297> ***Uptimer*** **Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**";

    let embed = new MessageEmbed()
      .setAuthor("Here Are My Comamnds!", message.guild.iconURL(), `https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${client.user.id}`)
      .setDescription(contents)
      .addField("<a:emogi_9:850033125395660811> All Commands", commands.sort().join("\n") // + "How to use?",
        //"[Click here](" + how_to + ") to read the Documentation."
      )
      
      .addField(
        "<a:793968555188027392:847688082097569803> Invite Me",
        `> 🔗 [Click Here](${github_repo}) To Invite Our Bot.`
      )
      .addField(
        "<:elixir:865224158815059978> Support Server",
        `> 🔗 [Click Here](https://discord.gg/DjnPRj3Bk8) To Join Our Support Server!.`
      )
      .addField("<:question:862770057838067752> How To Use?", "> 🔗 [Click Here](" + how_to + ") To Watch Tutorial Video .")
      .setColor("RANDOM")
          .setFooter(
     "Have A Nice Day " + `${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     }))
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()

    let row = new MessageActionRow()
  .addComponents(mybutton, mybutton1, mybutton2);

     let mybuttonsmsg = await message.channel.send(embed, row);
  },
};
