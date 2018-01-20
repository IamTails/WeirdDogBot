import discord
from discord.ext import commands

class General():
    def __init__(self, bot):
        self.bot = bot;

    @commands.command
    async def iam(message: discord.Message):
        entered_role = message.content[6:].lower()
        member_role = discord.utils.get(message.server.roles, name=entered_role)

        roles = [
            "402240648847032321"
        ]

        for r in message.author.roles:
            if r.id in roles:
                await self.bot.send_message(message.channel, "You already have this role.")
                return'
        if role is None:
            await bot.sendMessage(message.channel, "This role doesn't exist. Did CircuitRCAY mess up roles again?")
        elif role in message.author.roles:
            await self.bot.send_message(message.channel, "You already have this role :thonk:")
        
        else:
            try:
                await client.add_roles(message.author, role)
                await client.send_message(message.channel, "Successfully added role {0}".format(role.name))
            except discord.Forbidden:
                await client.send_message(message.channel, "I don't have perms to add roles.")    