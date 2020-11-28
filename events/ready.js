const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = client => {
  client.user.setStatus("online");
  var oyun = [
    "Discord Bot Developer qmi <3",
    "KayıtBot Altyapı | Ace Bots",
    "Discord Bot Development",
    "yt/ikrudka",
    "https://discord.gg/TGDNRDW"
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};