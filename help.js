// 📂 commands/help.js
module.exports = {
  name: 'help',
  description: 'Lists all available commands.',
  async execute(message) {
    const helpText = `
📖 **Available Commands**

🤖 **Bot Info**
!botinfo — About the bot

🔁 **Fun & Utility**
!ping — Ping the bot
!pingtime — Show response time
!reverse <text> — Reverses your input
!roll — Rolls a dice
!time — Shows the current time

🧠 **AI Interaction**
!chat <your message> — Ask anything
!talk <your message> — Alias for !chat

📅 **User & Server**
!userinfo — Get your Discord tag
!server — Server info

❓ **This Menu**
!help — Shows this command list
`;

    message.reply(helpText);
  },
};
