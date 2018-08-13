const discord = require('discord.js');
const bot = new discord.Client();

bot.login('process.env.token');

bot.on('ready', () => {
    bot.user.setActivity('Helping PCRPplayers!')
  })

bot.on('message', (message) => {
    if (message.author.bot) return;
    else if(message.content == 'donate') {
        message.reply('You can donate at https://pcrp.mistforums.com/donate. The perks of donating are also there.')
    }
});

bot.on('message', (message) => {
    if (message.author.bot) return;
    else if(message.content == 'custom car') {
        message.reply('You can view a list of custom cars for civilians here #🧑civilian-stuff')
    }
});

bot.on('message', (message) => {
    if (message.author.bot) return;
    else if(message.content == 'owner') {
        message.reply('Please use the chain of command')
    }
    else if(message.content == '@Jakob') {
        message.reply('Please use the chain of command')
    }
    else if(message.content == '@Peter') {
        message.reply('Please use the chain of command')
    }
});
