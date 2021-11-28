module.exports = {
    name: "help", 
    run: (client, message, args) => {

        const prefix = '.'
        const { MessageEmbed } = require('discord.js')
        var animated_emoji = message.guild.emojis.cache?.find(emoji => emoji.name == 'animated_gear');
        var NWRP = message.guild.emojis.cache?.find(emoji => emoji.name == 'nwrp');


        const HelpEmbed = new MessageEmbed()
// "<:bean:" + bean.id + ">"
        .setDescription('<:nwrp:' + NWRP.id + '>' +' **NWRP Security Bot** _(v1.0)_ \n' + '<a:animated_gear:' + animated_emoji.id + '>' + ' **Commands:** \n ```.massban [userid] [reason] \n.massunban [userid]```')
        .setFooter(`❤️Created by Tristan#9731 & Mike A.#4752❤️`);

        // .setTitle(`NWRP Security Help Commands`)
        // .setAuthor('NWRP Security Bot Help Commands', 'https://i.imgur.com/0WVVM1C.png')
        // .setDescription(`<> DO NOT INCLUDE WHILE RUNNING THESE COMMANDS.`)
        // .addField(`${prefix}` + '`massban <USERID> <REASON>`', 'Massbans a user from all NWRP Discord Servers.')
        // .addField(`${prefix}` + '`massunban <USERID>`', 'Massunbans a user from all NWRP Discord Servers.')
        // .setTimestamp()
        // .setFooter(`❤️Created by Tristan#9731 & Mike A.#4752❤️`);

        message.channel.send({ embeds: [HelpEmbed] });
    }   
}