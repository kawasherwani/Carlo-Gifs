const Discord = require('discord.js');
exports.run = (client, message) => {
 
 message.channel.send(`My ping is \`${client.ws.ping}\` ms. `)
  
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong"]
};

exports.help = {
  name: 'ping'
};
