module.exports.run = (client, message, args) => {
  message.reply(`Pong!\nAPI Latency: ${client.websocket.ping}ms`);
};
