const Discord = require('discord.js');
exports.run = (client, message) => {
  const Embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setDescription(`[ Invite Link ](bot link)`)
  
  message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invitelink"]
};

exports.help = {
  name: 'invite'
};

