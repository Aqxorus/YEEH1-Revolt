require('dotenv').config();
const { Client } = require('revolt.js');
const fs = require('fs');
const client = new Client();
const prefix = '.';

client.on('ready', async () => {
  console.log('The bot is ready');
});

// Command handler
(async () => {
  client.commands = new Map();
  const commands = fs
    .readdirSync('./Commands')
    .filter((file) => file.endsWith('.js'));

  for (file of commands) {
    const commandName = file.split('.')[0];
    const command = require(`./Commands/${commandName}`);
    client.commands.set(commandName, command);
  }
})();

// messageCreate event for executing commands
client.on('message', async (message) => {
  if (message.content === '<@01GJRHC0ZCT6T9JKARN954JY5H>') {
    return message.reply("My prefix is '.'");
  }
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if (!command) return;
    await command.run(client, message, args);
  }
});

client.loginBot(process.env.TOKEN).catch(async (err) => {
  console.error('Something happened while logging in the client:', err),
    process.exit(1);
});

process.on('unhandledRejection', async (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
});
