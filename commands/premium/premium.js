const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "premium",
    aliases: ["premium-help"],
    usage: '',
    description: "",
    category: "premium",
    cooldown: 0,
    userPermissions: "",
    botPermissions: "",
    ownerOnly: false,   
    toggleOff: false,
    premium: false,

    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[]} args
     */

    async execute(client, message, args, ee, prefix) {
        try {

            message.reply({
                embeds: [new MessageEmbed()
                    .setFooter({
                        text: `${client.user.username} Premium!`,
                        iconURL: client.user.displayAvatarURL()
                    })
                    .setColor(ee.color)
                    .setAuthor({
                        name: `${client.user.username} Premium!`,
                        iconURL: client.user.displayAvatarURL()
                    })
                    .setDescription(`> ❓ Get a Premium For ${client.user} in Your Server!
> 🚀 Get Access to Advanced Features of ${client.user} with Premium!
> 🤝 It's also a great way to support **[Milanio Development](${process.env.SUPPORT})** and **Hosting**!

${client.allEmojis.y} __**Here is a list of Some Premium Features!**__
> **\`︲\`Unlock Giveaway Commands Like (\`pause\`︲\`resume\`︲\`bonus-entry\`)**
> **\`︲\`Unlock Music Request System!**
> **\`︲\`Unlock Music Commands like (\`autoplay\`︲\`pause\`︲\`resume\`)**
> **\`︲\`Unlock About 46 Music Filters!**
> **\`︲\`Unlock Levelup Channel!**
> **\`︲\`Unlock Levelup Roles!**
> **\`︲\`Unlock AutoDelete System!**

> <:MilanioDevelopment:915263974256279612> *Join Our Server **[Milanio Development](${process.env.SUPPORT})** to Get Premium Today!*`)]
            })

        } catch (e) {
            console.log(e)
        }
    },
};