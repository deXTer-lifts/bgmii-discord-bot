module.exports = {
  name: 'time',
  description: 'Shows the current time.',
  async execute(message, args) {
    const now = new Date().toLocaleString();
    message.reply(`🕒 Current time: ${now}`);
  }
};
