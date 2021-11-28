const Discord = require('discord.js');
const config = require('../../auth/config.json')
const prefix = config.PREFIX

module.exports = {
    name: "messageCreate",
    run: async (message, client)=>{
        if(message.author.bot) return;
        if(!message.guild) return;
        if(!message.content.startsWith(client.config.PREFIX)) return;
        const args = message.content.slice(client.config.PREFIX.length).trim().split(/ +/g),
        command = args.shift().toLowerCase();
        if(command.length === 0 ) return;
        let cmd = client.commands.get(command)
        if(cmd){
            cmd.run(client, message, args, Discord)
        }
    }
}