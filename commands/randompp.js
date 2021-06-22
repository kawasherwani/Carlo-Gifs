const Discord = require('discord.js');
exports.run = (client, message) => {
  const Embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setFooter("VİCTORY")
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp"]
};

exports.help = {
  name: 'randompp'
};
