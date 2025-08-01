const axios = require('axios');
require('dotenv').config();

module.exports = {
  name: 'chat',
  description: 'Chat with a free GPT model via OpenRouter!',
  async execute(message, args) {
    const prompt = args.join(' ');
    if (!prompt) return message.reply('Please type something to ask.');

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'deepseek/deepseek-r1:free',  // ✅ confirmed free and valid
          messages: [{ role: 'user', content: prompt }]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost',  // Required by OpenRouter
            'X-Title': 'discord-gpt-bot'
          }
        }
      );

      const reply = response.data.choices[0].message.content;
      message.reply(reply);
    } catch (error) {
      console.error('❌ GPT Error:', error.response?.data || error.message);
      message.reply('⚠️ GPT model failed to respond.');
    }
  }
};
