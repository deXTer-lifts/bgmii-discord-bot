Here is your complete and polished README.md file for your bgmii Discord Bot — all in one place and ready to upload to GitHub:

⸻

✅ Copy & paste the following into your README.md file:

<h1 align="center">🤖 bgmii Discord Bot</h1>
<p align="center">
  A GPT-powered multipurpose Discord bot with personality, utility, and fun 🎲⚡
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/deXTer-lifts/bgmii-discord-bot?color=blue" alt="Repo Size" />
  <img src="https://img.shields.io/badge/Powered%20By-OpenRouter.ai-%2300A67E" alt="OpenRouter" />
  <img src="https://img.shields.io/badge/Made%20With-Node.js-6DA55F?logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT License" />
</p>

---

## ✨ Features

| Command         | Description                                  |
|----------------|----------------------------------------------|
| `!talk <msg>`   | Talk with GPT (via OpenRouter API)           |
| `!servent`      | Replies like a loyal anime butler 🫡         |
| `!reverse`      | Reverses the provided message                |
| `!roll`         | Rolls a random number between 1 and 6        |
| `!ping`         | Basic response to check if bot is alive      |
| `!pingtime`     | Calculates latency between bot and Discord   |
| `!time`         | Displays current system/server time          |
| `!botinfo`      | Shows bot uptime and memory usage            |
| `!userinfo`     | Shows info about the user who ran the command|

---

## 📂 Folder Structure

my-discord-bot/
├── commands/
│   ├── botinfo.js
│   ├── chat.js
│   ├── ping.js
│   ├── pingtime.js
│   ├── reverse.js
│   ├── roll.js
│   ├── server.js
│   ├── time.js
│   └── userinfo.js
├── index.js
├── .env               👈 Keep your API keys here (never push this)
├── package.json
└── README.md

---

## ⚙️ Setup & Installation

### 🔧 Requirements

- Node.js (v16 or higher)
- A Discord Bot Token
- An OpenRouter API key (free from https://openrouter.ai)

### 🚀 Getting Started

1. **Clone this repository**
```bash
git clone https://github.com/deXTer-lifts/bgmii-discord-bot.git
cd bgmii-discord-bot

	2.	Install dependencies

npm install

	3.	Configure your environment
Create a .env file in the root folder:

TOKEN=your_discord_bot_token
OPENROUTER_API_KEY=your_openrouter_api_key

	4.	Start your bot

node index.js


⸻

🔄 Running Forever with PM2

To keep your bot alive in the background:

npm install -g pm2
pm2 start index.js --name bgmii
pm2 save


⸻

🧠 Powered by OpenRouter

This bot uses the free OpenRouter API to simulate GPT-style conversations without needing a paid OpenAI API key.

⸻

📸 Screenshots

Add images or GIFs here if needed to show commands in action.
Example:


⸻

🧰 Built With
	•	Node.js
	•	Discord.js
	•	OpenRouter
	•	Axios
	•	dotenv

⸻

📌 Roadmap
	•	Add moderation commands (ban, kick, etc.)
	•	Add music support
	•	Create a web dashboard
	•	Add image generation and embed responses

⸻

🧑‍💻 Author

Dexter (aka Vishal)
📍 Mumbai, India
🔗 GitHub | LinkedIn

⸻

📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with proper credit.

⸻

🌟 Star this repo if you like it — and feel free to fork and contribute!

---