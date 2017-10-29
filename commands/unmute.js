const Discord = require('discord.js');
    exports.run = async (bot, msg, args) => {
        let staff = msg.member.permissions.has('MANAGE_ROLES')
        let bstaff = msg.guild.me.permissions.has('MANAGE_ROLES')
        let modlog = msg.guild.channels.find('name', 'mod-log')
        let reason = args.splice(1).join(' ');
        let user = msg.mentions.users.first()
        let muteRole = client.guilds.get(msg.guild.id).roles.find('name', 'Muted');
        if(!staff) return msg.channel.send("You need the permission ``MANAGE_ROLES`` to use this")
        if(!bstaff) return msg.channel.send("I need the permission ``MANAGE_ROLES`` to use this")
        if(msg.mentions.users.size < 1) return msg.channel.send("Mention a user to unmute.")
        if(reason.length < 1) return msg.channel.send("Enter a reason to unmute the person")
        if (!muteRole) return msg.channel.sendMessage("No Roles Found: Muted");
        msg.guild.member(user).removeRole(muteRole).then(() =>{
        msg.channel.sendMessage("Successfully unmuted " + user + "!");
        if(!modlog) return msg.channel.send("I couldn't find ``#mod-log``")
        const embed = new Discord.RichEmbed()
        .setAuthor(`${msg.author.tag}`, msg.author.avatarURL)
        .setColor(msg.guild.me.displayHexColor)
        .addField("User", user)
        .addField("Responsible Staff", `${msg.author.tag} (${msg.author.id})`)
        .addField("Reason", reason)
        msg.guild.channels.find('name', 'mod-log').send({embed, embed})
});
}