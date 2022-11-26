require('dotenv').config();
const { Client } = require('revolt.js');

const client = new Client();
const prefix = process.env.PREFIX;

client.on('ready', async () => {
  console.log('The bot is ready');
});

// Prefix finder
client.on('message', async (message) => {
  if (!message.content) return;
  if (message.content === '<@01GJRHC0ZCT6T9JKARN954JY5H>') {
    message.reply(`My prefix is ${prefix}`);
  }
});

// Commands
client.on('message', async (message) => {
  if (!message.content) return;

  if (message.content === `${prefix}ping`) {
    message.reply('pong');
  }
});

client.loginBot(process.env.TOKEN);
