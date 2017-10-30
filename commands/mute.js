const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    let staff = message.member.permissions.has('MANAGE_ROLES')
    let bstaff = message.guild.me.permissions.has('MANAGE_ROLES')
    let reason = args.splice(1).join(' ');
    let user = message.mentions.users.first()
    let muteRole = client.guilds.get(msg.guild.id).roles.find('name', 'Muted');
    if(!staff) return msg.channel.send("You need the permission ``MANAGE_ROLES`` to use this")
    if(!bstaff) return msg.channel.send("I need the permission ``MANAGE_ROLES`` to use this")
    if(msg.mentions.users.size < 1) return msg.channel.send("Mention a user to mute.")
    if(reason.length < 1) return msg.channel.send("Enter a reason to mute the person")
    if (!muteRole) return msg.channel.send("No Roles Found: Muted");
    if (msg.member.roles.has(muteRole.id)) {
    msg.channel.send("Sorry, That user is already muted, please use ppunmute to unmute them.")
    } else {
    msg.guild.member(user).addRole(muteRole).then(() =>{
    msg.channel.send(`Successfully Muted ` + user + ` for ` + reason)

        if(!modlog) return message.channel.send("I couldn't find ``#mod-log``")
        const embed = new Discord.RichEmbed()
        .setTitle("Action - Mute")
        .setAuthor(`${msg.author.tag}`, msg.author.avatarURL)
        .setColor(msg.guild.me.displayHexColor)
        .addField("User", user)
        .addField("Responsible Staff", `${msg.author.tag} (${msg.author.id})`)
        .addField("Reason", reason)
        msg.guild.channels.find('name', 'mod-log').send({embed, embed})
    });
    }
}  
