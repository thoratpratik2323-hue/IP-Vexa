# ✦ VEXA AI — Desktop Assistant Setup Guide

Welcome to **VEXA AI**, an open-source neural desktop assistant.

---

## Prerequisites
- **Node.js**: Download and install Node.js (LTS version) from [nodejs.org](https://nodejs.org).
- **API Key**: An API key from Anthropic (Claude) or NVIDIA NIM API.

---

## Setup Instructions

### 1. Clone & Navigate
Place the source files in a dedicated directory:
```bash
git clone https://github.com/your-repo/vexa-ai-desktop.git
cd vexa-ai-desktop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Application
```bash
npm start
```

On Linux system environments with GPU sandboxing, launch using:
```bash
./start_linux.sh
```

---

## Configuration on First Launch
1. Open VEXA AI.
2. Select your AI Provider (Anthropic / NVIDIA).
3. Input your API Key when prompted.
4. Click **Save API Key**.

---

## License
Distributed under the **MIT License**.
