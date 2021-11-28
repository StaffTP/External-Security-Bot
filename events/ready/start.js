module.exports ={
    name: "ready",
    run: (client, guild) => {
        console.log("Nationwide Roleplay Security Bot is ready.")
        client.user.setActivity(`PCRP Security`, { type: "WATCHING" } )
        // var animated_emoji = guild.emojis.cache?.find(emoji => emoji.name == 'animated_gear');
        // let emojicreate = guild.emojis.cache?.create('https://i.imgur.com/Br25XqC.gif', 'animated_gear')
        // if(!animated_emoji) {
        //     emojicreate()
        // } else {
        //     console.log('Animated Emoji already created, Continuing')
        // }
    }
}