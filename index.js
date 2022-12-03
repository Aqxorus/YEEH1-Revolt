require('dotenv').config();
const { Client } = require('revolt.js');
const prefix = process.env.PREFIX;

const client = new Client();

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('message', (msg) => {
  if (!msg.content) return;

  // Prefix finder
  if (msg.content === `<@01GJRHC0ZCT6T9JKARN954JY5H>`) {
    msg.reply(`My prefix is \'${prefix}\'`);
  }

  // Simple CMD Handler
  if (msg.content === `${prefix}ping`) {
    msg.reply(`Pong!\nAPI Latency: ${client.websocket.ping}ms`);
  }
});

try {
  client.loginBot(process.env.TOKEN);
} catch (error) {
  console.error(error);
}
