const Discord = require('discord.js')
exports.run = async (bot, msg, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle("List of Commands")
        .addField("Prefix", "w/")
        .addField("`ban @mention reason`", "Everybody's favorite command")
        .addField("`kick @mention reason`", "Kicks the provided user")
        .addField("`mute @mention reason`", "Mutes the provided user")
        .addField("`purge [amount] [@optional-mention]`", "Purges messages in the current channel")
        .addField(`unmute @mention reason`, "Unmutes given user with reason");
    msg.channel.send({embed});
}