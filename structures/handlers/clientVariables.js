const { Collection } = require("discord.js");
const config = require("../botconfig/config.json");

module.exports = async (client) => {
    
    client.commands = new Collection();
	client.slashCommands = new Collection();
	client.events = new Collection();
	client.aliases = new Collection();
	client.cooldowns = new Collection();
    client.allEmojis = require("../botconfig/emojis.json");
    client.owners = config.ownerID;
    client.premiumActivator = config.Premium_Activator;
    client.premiumServers = new Collection();
    client.blacklistWords = new Collection();
    client.blacklistWordsChannel = new Collection();
	
    client.logger(`Loaded Client_Variables`.brightGreen);
}

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/milanio
 * @INFO
 * Work for Milanio Development | https://discord.gg/milanio
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */