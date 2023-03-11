require('dotenv').config();
const { Client } = require('revolt.js');
const fs = require('fs');
const client = new Client();
const commandHander = require('./commandHandler');

client.on('ready', async () => {
  console.log('The bot is ready');
});

// messageCreate event for executing commands
client.on('message', async (message) => {
  await commandHander(client, message);
});

client.loginBot(process.env.TOKEN).catch(async (err) => {
  console.error('Something happened while logging in the client:', err),
    process.exit(1);
});
