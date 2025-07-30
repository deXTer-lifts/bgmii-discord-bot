module.exports = {
  name: 'server',
  description: 'Shows server info.',
  async execute(message) {
    const { guild } = message;
    message.reply(`📍 Server name: ${guild.name}\n👥 Members: ${guild.memberCount}`);
  }
};
