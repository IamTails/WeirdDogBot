exports.run = async (bot, msg, args) => {
    await msg.channel.send(`
       __**WeirdDogBot Commands**__

       You can use \`w/<command>\` to use a command!

       Commands for ${msg.guild.name}:
       \`ban\` -> Ban a member (Requires \`BAN_MEMBERS\`)
       \`kick\` -> Kick a member (Requires \`KICK_MEMBERS\`)
       \`purge\` -> Purges 'x' amount of messages (Requires \`MANAGE_MESSAGES\`)
       \`help\` -> This message
       \`mute\` -> Mute a player (Requires \`MANAGE_ROLES\`)
       \`unmute\` -> Unmute a player (Requires \`MANAGE_ROLES\`)

       :warning: - Most these commands require a \`mod-log\` channel.
    `);
}
