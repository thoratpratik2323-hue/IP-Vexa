<div align="center">

# ✦ VEXA AI ✦
### *The Ultimate Open-Source Neural Desktop Workspace & AI Companion*

[![License: MIT](https://img.shields.io/badge/License-MIT-7c5cfc.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-4f8eff.svg?style=for-the-badge&logo=linux&logoColor=white)]()
[![Electron](https://img.shields.io/badge/Electron-v28.2.0-3dd6f5.svg?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Multi-LLM](https://img.shields.io/badge/Multi--LLM-NVIDIA%20NIM%20%7C%20Claude%203.5%20%7C%20GPT--4o-76b900.svg?style=for-the-badge&logo=nvidia&logoColor=white)]()
[![Image-AI](https://img.shields.io/badge/Image%20AI-Pollinations%20SD-ff5555.svg?style=for-the-badge&logo=artstation&logoColor=white)]()

<br/>

```
  ____   ____ _______   __ ___    /\     ___ 
  \   \ /   /|   ____| \  /  \  /  \   |_ _|
   \   Y   / |  |__    \ \/    \/ /\ \   | | 
    \     /  |   __|    \  /\  / /__\ \  | | 
     \___/   |__|____/\  \/  \/_/    \_\|___|
```

**VEXA AI** is a privacy-first, ultra-fast, open-source desktop neural assistant built to integrate multi-provider AI models, AI image generation, project folder intelligence, OS shell control, and long-term self-learning memory into a sleek glassmorphic desktop environment.

[Features](#-key-features) • [Slash Commands](#-slash-commands) • [AI Image Generator](#-ai-image-generator) • [Quick Start](#-quick-start-guide) • [License](#-license)

</div>

---

## ⚡ Key Features

- 🚀 **Universal Multi-LLM Engine**: Switch instantly between **NVIDIA NIM (Llama 3.1)**, **Anthropic Claude 3.5/4**, **OpenAI GPT-4o**, **DeepSeek R1**, **Google Gemini**, **Groq**, **OpenRouter**, and **Custom Endpoints**.
- 🎨 **Built-In AI Image Generator (`/image`)**: Generate high-resolution AI artwork and visuals directly inside chat using Stable Diffusion models.
- 📂 **Directory & Codebase Intelligence (`/scan`)**: Index software repositories with 1-click and automatically output a structured `VEXA_SUMMARY.md` project report.
- 🎨 **Code & Artifact Side Canvas**: Dedicated slide-out panel for live code rendering, markdown documents, and math.
- 🧠 **Self-Learning Long-Term Memory (`🧠 Memory`)**: Automatically extracts and retains user preferences, tech stack details, and project context across app restarts.
- 🖥️ **Native System Shell Execution (`/cmd`, `/cpu`, `/ram`, `/ip`)**: Monitor system health (CPU/RAM/IP) and safely execute terminal commands inside chat.
- 💬 **Multi-Thread Session Manager (`💬 Chats`)**: Organize, save, and switch between separate conversation threads seamlessly.
- 📥 **1-Click Chat Export**: Export conversation threads directly into clean Markdown files.
- 🎙️ **Continuous Hands-Free Voice Mode**: Hands-free voice recognition loop for seamless voice interactions.
- 🔒 **Zero Telemetry & 100% Private**: Local credential storage with complete data sovereignty.

---

## 💻 Slash Commands Reference

| Command | Action | Description |
| :--- | :--- | :--- |
| `/image <prompt>` | **AI Image Generation** | Generates AI artwork/images from text descriptions |
| `/scan` | **Directory Indexing** | Scans local code folder and creates `VEXA_SUMMARY.md` report |
| `/memory` | **Memory Store** | View all self-learned facts and user preferences stored |
| `/clear` | **Wipe Chat Screen** | Clears visible chat output while keeping learned memory intact |
| `/export` | **Export Thread** | Exports full conversation log to a formatted `.md` file |
| `/search` | **Toggle Live Web** | Enables/disables live web search context mode |
| `/mode` | **Provider Setup** | Opens AI Provider & API Key Configuration modal |
| `/cpu` | **CPU Metrics** | Runs native system CPU utilization check |
| `/ram` | **RAM Metrics** | Checks available and total physical memory |
| `/ip` | **Network Metrics** | Displays local network interfaces and IP addresses |
| `/cmd <command>` | **OS Shell Exec** | Executes terminal commands in workspace |
| `/joke` | **Developer Humor** | Generates a quick programming joke |
| `/help` | **Master Menu** | Displays interactive master command reference |

---

## 🎨 AI Image Generator

Generate AI images anytime inside VEXA AI:

```text
/image A futuristic cyberpunk city with neon lights at night 8k
```

Or type `/image` to open an interactive prompt dialog!

---

## 🛠️ Tech Stack & Architecture

```
                                  +-----------------------+
                                  |    VEXA AI Desktop    |
                                  +-----------+-----------+
                                              |
                       +----------------------+----------------------+
                       |                                             |
            +----------v----------+                       +----------v----------+
            |  Electron Main IPC  |                       | Glassmorphic UI (JS)|
            +----------+----------+                       +----------+----------+
                       |                                             |
        +--------------+--------------+             +----------------+----------------+
        |                             |             |                                 |
+-------v--------+           +--------v------+ +----v-----------+            +--------v-------+
| File System FS |           | OS Exec Shell | | Provider Engine|            | Memory Store   |
+----------------+           +---------------+ +----------------+            +----------------+
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** / **npx**

### 2. Installation & Run

```bash
# Navigate to application folder
cd IP_VEXA_PORTABLE_FOR_FRIEND/extracted_app

# Install dependencies (if needed)
npm install

# Launch VEXA AI
npm start
```

#### On Windows Portable Executable:
- Simply double-click **`IP VEXA.exe`** or **`run_app.bat`** in the root directory.

---

## 📄 License

Distributed under the **MIT License**. Free for open-source and commercial distribution.

---

<div align="center">

**Built with ✦ for the AI Developer Community**

</div>
