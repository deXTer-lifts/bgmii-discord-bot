module.exports = {
  name: 'userinfo',
  description: 'Shows user info.',
  async execute(message) {
    message.reply(`👤 Username: ${message.author.tag}\n🆔 ID: ${message.author.id}`);
  }
};
