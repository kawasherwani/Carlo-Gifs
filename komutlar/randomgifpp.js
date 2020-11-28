const Discord = require('discord.js');
const data = require('wio.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_ROLES')) return;
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`:x: Doğru kullanım: v!random-gif-pp ayarla #kanal Veya v!random-gif-pp sıfırla`));

  
  
  if (args[0] === 'sıfırla') {
        const ayarlı = await data.fetch(`gifpp.${message.guild.id}`)
        if (!ayarlı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Kanal zaten ayarlı değil.`))

        data.delete(`gifpp.${message.guild.id}`)
        message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`PP ve GİF fotoğrafların gönderileceği kanal sıfırlandı.\n
Ayarlamak için: v!random-gif-pp ayarla #kanal`))
    }    let channel = message.mentions.channels.first()
    if (channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setImage('https://support.discord.com/hc/article_attachments/360007795191/2_.jpg').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001')) 
     
  
  if (args[0] === 'ayarla') {
      

        const ayarlı = await data.fetch(`gifpp.${message.guild.id}`)
        if (ayarlı) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Kanal zaten ayarlı.`))

        if (!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Bir kanalı etiketlemelisin.`))
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`${args[1]}, isimli kanalı bu sunucuda bulamıyorum.`))

        data.set(`gifpp.${message.guild.id}`, channel.id)
        message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`PP ve GİF fotoğrafların gönderileceği yer: ${channel} olarak ayarlandı.
Sıfırlamak İçin: v!random-gif-pp sıfırla`))

    } 

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'random-gif-pp'
};