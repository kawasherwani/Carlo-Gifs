const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {         // Code Universe



let replies = ["https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif","https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301552750002226/rosiegif4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301813912666145/gif_342.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif","https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif","https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif","https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif","https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301552750002226/rosiegif4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301813912666145/gif_342.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif","https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif"];

let result = Math.floor((Math.random() * replies.length));
let result2 = Math.floor((Math.random() * replies.length));
let result3 = Math.floor((Math.random() * replies.length));
let result4 = Math.floor((Math.random() * replies.length));
                                                                          // Code Universe
let jaus01 = new Discord.MessageEmbed()
.setAuthor(`VICTORY`,`${message.author.avatarURL}`)
.setColor("#34006f") 
.setImage(replies[result]);
message.channel.send(jaus01);
  let jaus02 = new Discord.MessageEmbed()
.setColor("#34006f")
.setImage(replies[result2]);               // Code Universe
message.channel.send(jaus02);
  let jaus03 = new Discord.MessageEmbed()
.setColor("#34006f")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result3]);
message.channel.send(jaus03);
};

exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['randomgif'],
  permLevel: 0

};   // Code Universe
  
exports.help = {

  name: 'random-gif'
};