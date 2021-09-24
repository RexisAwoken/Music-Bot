module.exports = {
    name: "disconnect",
    description: "Makes the bot leave a voice channel!",
    aliases: ['dis', 'dc', 'leave'],
    usage: "",
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`<:error:824026058046308423> ${message.member}, You have to be in a voice channel to use this command.`)
        if (!message.guild.me.voice.channel) return message.channel.send(`<:error:824026058046308423> **I am not connected to a voice channel.** Type \`c!join\` to get me in one`)
        let disconnect;
        try {
            const channel = message.member.voice.channel;
            disconnected = await channel.leave();
            if (!message.guild.voiceConnection) message.member.voice.channel.leave()
            message.channel.send('<:success:824023382475145277> **Successfully disconnected.**')
        }
        finally { }
    }
}