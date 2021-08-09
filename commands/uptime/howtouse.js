const { MessageEmbed } = require("discord.js")
const { MessageButton } = require('discord-buttons')
module.exports = {
	name: "howtouse",
	category: "uptime",
	description: "*Learn How To Use This Bot*",
	useage: "howtouse",
	run: async (client, message, args) => {
		try {
			let button_public_invite = new MessageButton().setStyle('url').setLabel('Invite Our Bot').setURL("https://discord.com/oauth2/authorize?client_id=849523433657466890&permissions=2147875904&scope=bot")
			let button_support_dc = new MessageButton().setStyle('url').setLabel('Support Server').setURL("https://discord.gg/ghQ64n9h")
			let button_invite = new MessageButton().setStyle('url').setLabel('Bot List Website').setURL(`https://topicbotlist.tk/`)
			const allbuttons = [button_public_invite, button_support_dc, button_invite]
			message.channel.send({embed: new MessageEmbed()
				.setColor("RANDOM")
				.setFooter("")
				.setTimestamp()
				.setThumbnail("https://images-ext-2.discordapp.net/external/oUP4U0sZ33M7Pe1e1zfP4TRckF04yemZvFs_owvBJHQ/%3Fsize%3D512/https/cdn.discordapp.com/avatars/745581095747059722/ca13e740175a778d779cd2f8d0e4084e.webp?width=410&height=410")
				.setTitle("How To Use Uptimer")
				.setURL("https://discord.gg/DjnPRj3Bk8")
				.setDescription(`
 **Follow This Steps !**
 > *1. Go To Your Project. If Your Project Looks Like This And It Dont Have The Browser Window So Continue The Steps, If You Already Have A Browser Window In The Top Right Corner Skip To Step 3*.
 > *2. Now go to your main file in my case it is index.js, and on the top of your file paste this code, and it will create an express app.*
 > *3. Next Click Run button, if already running stop it and Run the project, you'll see a browser window appeared in the top right corner.*
 > *4. Now add that url in Uptimer bot, using this command ,add <the url you just copied.*`), 
buttons: allbuttons
			}).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor("RANDOM")
				.setFooter("aaaa")
				.setTitle(`<:no:833101993668771842> An error occurred`)
				.setDescription(`\`\`\`${String(e.stack).substr(0, 2000)}\`\`\``)
			);
		}
	}
}