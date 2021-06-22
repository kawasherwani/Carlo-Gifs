const Discord = require('discord.js');
exports.run = (client, message) => {
  const Embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setDescription(`gif`)
  
  message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"]
};

exports.help = {
  name: 'help'
};
