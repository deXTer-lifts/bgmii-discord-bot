module.exports = {
  name: 'roll',
  description: 'Rolls a 6-sided dice.',
  async execute(message) {
    const roll = Math.floor(Math.random() * 6) + 1;
    message.reply(`🎲 You rolled a ${roll}`);
  }
};
