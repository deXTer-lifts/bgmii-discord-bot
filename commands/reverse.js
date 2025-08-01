module.exports = {
  name: 'reverse',
  description: 'Reverses your message.',
  async execute(message, args) {
    const text = args.join(" ");
    if (!text) return message.reply("❌ Please provide a message.");
    const reversed = text.split("").reverse().join("");
    message.reply(`🔁 ${reversed}`);
  }
};
