const {Client} = require('discord.js');
const log = require('sj.reggol');
const bot = new Client();
const settings = require('./settings.json')
const fs = require('fs');


bot.on("ready", () => {
    log.notify("Bark! Bark! The dog has started barking!");
    bot.user.setPresence({game: {name: `w/help | Dog weirdly barking`, type: 0}})
})



bot.on("message", msg => {
    if (msg.author.bot) return;
    if(msg.content.indexOf(settings.prefix) !== 0) return;
  
    const args = msg.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, msg, args);
    } catch (err) {
      log.error(err);
    }
});

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Members');
  member.addRole(joinRole);
  let memlog = bot.guilds.get('371542832600711168').channels.find("name", "member-log")
  memlog.send(`${member.user.username} has joined the server! Bark!`)
  log.notify(`${member.user.username} has joined the server! Bark!`);
  
})
bot.login(settings.token)