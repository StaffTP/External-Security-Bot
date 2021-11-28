                    //    /$$     /$$                                   /$$       /$$          
                    //   | $$    |__/                                  |__/      | $$          
//  /$$$$$$$   /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$  /$$  /$$  /$$ /$$  /$$$$$$$  /$$$$$$ 
// | $$__  $$ |____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$| $$ | $$ | $$| $$ /$$__  $$ /$$__  $$
// | $$  \ $$  /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$| $$ | $$ | $$| $$| $$  | $$| $$$$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$| $$ | $$ | $$| $$| $$  | $$| $$_____/
// | $$  | $$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$|  $$$$$/$$$$/| $$|  $$$$$$$|  $$$$$$$
// |__/  |__/ \_______/   \___/  |__/ \______/ |__/  |__/ \_____/\___/ |__/ \_______/ \_______/
                                                                                                                                                                                   
                        //  
                    //    /$$                                             /$$       /$$                   /$$    
                    //   | $$                                            | $$      | $$                  | $$    
//   /$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$ | $$      | $$$$$$$   /$$$$$$  /$$$$$$  
//  /$$__  $$|  $$ /$$/|_  $$_/   /$$__  $$ /$$__  $$| $$__  $$ |____  $$| $$      | $$__  $$ /$$__  $$|_  $$_/  
// | $$$$$$$$ \  $$$$/   | $$    | $$$$$$$$| $$  \__/| $$  \ $$  /$$$$$$$| $$      | $$  \ $$| $$  \ $$  | $$    
// | $$_____/  >$$  $$   | $$ /$$| $$_____/| $$      | $$  | $$ /$$__  $$| $$      | $$  | $$| $$  | $$  | $$ /$$
// |  $$$$$$$ /$$/\  $$  |  $$$$/|  $$$$$$$| $$      | $$  | $$|  $$$$$$$| $$      | $$$$$$$/|  $$$$$$/  |  $$$$/
//  \_______/|__/  \__/   \___/   \_______/|__/      |__/  |__/ \_______/|__/      |_______/  \______/    \___/  
//  
                
const { Intents, Client, Collection } = require('discord.js');
const intents = new Intents(32767);
const client = new Client( { intents } );
const config = require('./auth/config.json');

client.config = config;
client.commands = new Collection(),
client.events = new Collection();


["commands", "events"].forEach(p => {
    require(`./handler/${p}`)(client)
});


client.login(config.TOKEN);
