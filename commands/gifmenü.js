const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('wio.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 

exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "v!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`**VICTORY Bot  Gif Menüsüne Hoşgeldiniz**`)
        .setDescription(`
 
        **v!gif-ara**  Yazdığınız Kelime Hakkında Gif Aratır!
        **v!man-gif** Rastgele Erkek Gifi Atar!
        **v!woman-gif** Rastgele Kadın Gifi Atar!
        **v!couple-gif** Rastgele Sevgili Gifi Atar!
        **v!baby-gif** Rastgele Bebek Gifi Atar!
        **v!animal-gif** Rastgele Hayvan Gifi Atar!
        **v!randomgif** Rastgele 2 Tane Gifi Atar!
        **v!randompp** +500.000 Kullanıcının rastgele pp yada gif atar
        **v!marvel-gif**  Rastgele Marvel Gifi Atar!
		**v!random-gif-pp ayarla #kanal** +500K Kullanıcının Rastgele pp ve gif belirtilen kanala atar! 
		**v!random-gif-pp sıfırlar** +500K Kullanıcının Rastgele pp ve gif belirtilen kanala atmasını sıfırlar! `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Gif-menü'],
  permLevel: 0,
};

exports.help = {
  name: 'gif-menü',
  description: 'a!davet-sistemi Menüsü',
  usage: 'gif-menü'
};