const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Uyarı !")
    .setDescription("Bu Komutu Kullanmaya Yetkin Yok")
      if(!message.member.roles.cache.has("7903757308092358741")) return message.channel.send(embed1);

   let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
 

let isim  =  args[1]
let yaş =  args[2]

if(!user) return message.channel.send(`Lütfen geçerli bir kullanıcı veya ID belirt.`)
  
 await user.setNickname(`Lütfen Bekleyiniz.`)
  user.roles.add("903757308021063697")
  user.roles.remove("7903757307979108441")
  
  message.react('✅')
  
  setTimeout(() => {
    user.setNickname(`${isim} • ${yaş}`)
  },5000)


}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "erkek",
  description: "v12 erkek kayıt."
};
