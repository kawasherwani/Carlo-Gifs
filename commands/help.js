const Discord = require('discord.js');
exports.run = (client, message) => {
  const Embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`this is all command gifs`)
  .addField("**Info**","`help`, `ping`, `invite`")
 .addField("**Gifs**","`mangif`, `womangif`, `couplegif`, `babygif`, `animegif`, `animalgif`, `marvelgif`, `randomgif`, `randompp`")
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
