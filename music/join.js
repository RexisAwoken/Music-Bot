const Discord = require('discord.js')
module.exports = {
    name: "join",
    description: "Makes the bot join a channel!",
    usage: "",
    async execute(client, message, args) {

        const errormsg = new Discord.MessageEmbed()
            .setColor('F35353')
            .setDescription(`<:error:824026058046308423> You have to be in a voice channel to use this command.`)

        const joinedmsg = new Discord.MessageEmbed()
            .setColor('43b581')
            .setDescription('<:success:824023382475145277> Successfully joined the channel!')

        if (!message.member.voice.channel) return message.lineReply(errormsg)
        let joined;
        try {
            const channel = message.member.voice.channel;
            joined = await channel.join();
            if (!message.guild.voiceConnection) message.member.voice.channel.join().then(await joined.voice.setSelfDeaf(true))
            message.lineReplyNoMention(joinedmsg)
        }
        finally { }
    }
}