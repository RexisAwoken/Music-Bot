const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "skip",
    description: "skips the current song",
    usage: "",
    async execute(client, message, args) {
        const queue = new Map();
        const voiceError = new MessageEmbed()
            .setDescription(':error: Your not in a voice chat! Join one to get started.')
            .setColor(`F35353`)

        const server_queue = queue.get(message.guild.id)

        const skip_song = (message, server_queue) => {
            if (!message.member.voice.channel) return message.lineReply(voiceError);
            if (!server_queue) {
                return message.channel.send(`There are no songs in queue 😔`);
            }
            server_queue.connection.dispatcher.end();

            skip_song(message, server_queue)
        }
    }
}