const { Client } = require('revolt.js');

const client = new Client();

client.config = require('./config.json');
const { token, prefix } = client.config;

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

client.loginBot(token).catch(async (err) => {
  console.error('Something happened while logging in the client:', err),
    process.exit(1);
});

process.on('unhandledRejection', async (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
});
