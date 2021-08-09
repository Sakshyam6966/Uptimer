const { default_prefix, owners } = require("../config.json");
const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
     const embed = new Discord.MessageEmbed()
        .setTitle('Hi, Im Uptimer. Need help?')
        .setThumbnail('https://images-ext-2.discordapp.net/external/-SxF6fGtoECiBUJTy_G9Lug4d0XmzuDCeSa-dn-VRxE/%3Fsize%3D256/https/cdn.discordapp.com/avatars/849523433657466890/9b0cd1ae4f6ec5fe9e085b2d5d6e82c8.png?width=205&height=205')
        .setDescription(`You Can See Everything I Can Do By Using The \`${default_prefix}help\` command.`)
        .addField('Invite Me',`
          You Can Add Me To Your Server By Clicking 
          [Here](https://discord.com/api/oauth2/authorize?client_id=849523433657466890&permissions=8&scope=bot)`)
        .addField('Support',`
          If You Have Questions, Suggestions, Or Found A Bug, Please Join The [Support Server](https://discord.gg/HhNA54Qwxm)!
        `)
      .setColor("RANDOM")
      .setTimestamp()
      return message.channel.send(embed);
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.content.split(" ").forEach(m => {
        // if (is_url(m)) {
        //  message.delete().catch(err => {})
        // return message.channel.send("You are not allowed to send links :/")
        //} else if (badwords.find(x => x.toLowerCase() === m.toLowerCase())) {
        //message.delete().catch(err => {});
        //return message.channel.send(
        // "You are not allowed to use (**" + m + "**) word here"
      });
    }
  
  
    if (!message.content.startsWith(default_prefix)) return;
  
    if (!message.member) message.member = await message.guild.members.fetch(message);
  
    const args = message.content
      .slice(default_prefix.length)
      .trim()
      .split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length === 0) return;
  
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (!command) return;
    if (command.botPermission) {
      let neededPerms = [];
  
      command.botPermission.forEach(p => {
        if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`");
      });
  
      if (neededPerms.length)
        return message.channel.send(
          `I need ${neededPerms.join(", ")} permission(s) to run this command!`
        );
    } else if (command.authorPermission) {
      let neededPerms = [];
  
      command.authorPermission.forEach(p => {
        if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`");
      });
  
      if (neededPerms.length)
        return message.channel.send(
          `You need ${neededPerms.join(
            ", "
          )} permission(s) to run this command!`
        );
    }
  
    if (command.ownerOnly) {
      if (!owners.includes(message.author.id))
        // if (message.author.id !== ownerID)
        return message.channel.send("This command can only be used by the bot owner.");
    }
  
    if (command) command.run(client, message, args);
  };