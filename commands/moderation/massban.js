module.exports = {
    name: "massban",
    run: (client, message, args, Discord) => {

        message.delete( { timeout: 1 } )

        const targetID = args[0];
        const reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send(`Provide a **USER ID**.`)

        if(message.member.roles.cache.some(r => r.name === "External Security Perms")) {
            client.guilds.cache.forEach(a => a.members.ban(targetID));

            // embed start
            const massbanUsed = new Discord.MessageEmbed()
            // .setDescription('<:nwrp: <@${targetID}> has been banned from NWRP\'s Discord Servers.')
            .setAuthor(`NWRP External Security`, 'https://i.imgur.com/ZYoBaZW.png')
            .setDescription('<@' + targetID + '>' + ` has been **banned** from CWRP's Discord Servers.`)
            .setTimestamp();
            

            // embed end
            message.channel.send({ embeds: [massbanUsed] })
                //message.channel.send(`<@${targetID}> has been banned from NWRP's Discord Servers.`)
        } else {
            message.channel.send('No Permission to use this command.');
            console.log(`${message.author.tag} tried using the massban command but doesn't have the permission to do so.`);
        }

    }
}