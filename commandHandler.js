const fs = require('fs');
const path = require('path');

module.exports = (client, message) => {
  // Check if the message is a command
  if (!message.content.startsWith('!')) return;

  // Split the message into command and arguments
  const args = message.content.slice(1).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  // Get the command file
  const commandFile = path.join(__dirname, 'commands', `${commandName}.js`);
  if (!fs.existsSync(commandFile)) return;

  // Execute the command
  const command = require(commandFile);
  command.execute(client, message, args);
};
