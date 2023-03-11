module.exports = {
  name: 'ping',
  description: 'Ping!',
  async execute(client, message, args) {
    await message.reply(`Pong!\nPing: ${client.websocket.ping}ms`);
  },
};
