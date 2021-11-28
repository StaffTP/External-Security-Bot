const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "massunban",
    run: (client, message, args, Discord) => {

        const targetID = args[0];
        const reason = args.slice(1).join(" ")
        if(!args[0]) return message.channel.send(`Provide a **USER ID**.`)

        const massbanUsed2 = new Discord.MessageEmbed()
            // .setDescription('<:nwrp: <@${targetID}> has been banned from NWRP\'s Discord Servers.')
            .setAuthor(`NWRP External Security`, 'https://i.imgur.com/ZYoBaZW.png')
            .setDescription('<@' + targetID + '>' + ` has been **unbanned** from CWRP's Discord Servers.`)
            .setTimestamp();
            

            // embed end


        if(message.member.roles.cache.some(r => r.name === "External Security Perms")) {
            client.guilds.cache.forEach(a => a.members.unban(targetID));
                message.channel.send({ embeds: [massbanUsed2] })
        } else {
            message.channel.send('No Permission to use this command.');
            console.log(`${message.author.tag} tried using the massunban command but doesn't have the permission to do so.`);
        }

    }
}