module.exports = {
  name: 'pingtime',
  description: 'Shows the bot\'s response time.',
  async execute(message) {
    const sent = await message.channel.send('Pinging...');
    sent.edit(`🏓 Pong! Round-trip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
  }
};
