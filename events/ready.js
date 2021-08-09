module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.projectsSize} Projects | ${client.guilds.cache.size} Servers `, {
    type: "WATCHING",
  });
};