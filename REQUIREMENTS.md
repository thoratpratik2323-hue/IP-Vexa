# 📋 IP Vexa Requirements & 1-Click Dependency Installer

This document lists all system requirements, software prerequisites, and 1-click commands to install dependencies for **IP Vexa**.

---

## 💻 System Prerequisites

| Prerequisite | Minimum Version | Recommended | Notes |
| :--- | :--- | :--- | :--- |
| **Node.js** | `v18.0.0` | `v20.x` or higher | Required to run Electron & JS runtime |
| **npm** | `v9.0.0` | `v10.x` | Comes bundled with Node.js |
| **OS** | Windows 10/11 | Windows 11 / Linux / macOS | Cross-platform desktop support |

---

## ⚡ 1-Click Dependency Installation

### 🪟 Windows (Automated Batch File)
Double-click **`install_requirements.bat`** in the project root directory or run:

```cmd
install_requirements.bat
```

### 🐧 Linux / 🍎 macOS
Run the shell command below in your terminal:

```bash
chmod +x install_requirements.sh
./install_requirements.sh
```

---

## 🛠️ Manual Installation Guide

If you prefer to install dependencies manually:

```bash
# 1. Navigate to the app directory
cd extracted_app

# 2. Install all required npm packages & Electron engine
npm install

# 3. Launch IP Vexa Desktop App
npm start
```

---

## 📦 Bundled Package Dependencies

- **`electron`**: `^28.2.0` (Native Desktop Frame & Chromium Runtime)
- **`marked`**: Markdown rendering engine
- **`highlight.js`**: Code syntax highlighter
- **`mermaid`**: Interactive diagram generator
- **`katex`**: LaTeX mathematical equation renderer
- **`pollinations-ai`**: Dynamic AI Image Generator API integration

---

<div align="center">

**IP Vexa — Built with ✦ for the AI Community**

</div>
