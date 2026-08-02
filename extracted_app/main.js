const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 640,
    minHeight: 500,
    frame: true,
    show: true,
    center: true,
    backgroundColor: '#0a0c14',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.focus();
  });
  mainWindow.show();
  mainWindow.focus();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// ── IPC HANDLERS (Registered once) ──
ipcMain.on('minimize-window', () => mainWindow?.minimize());
ipcMain.on('maximize-window', () => {
  if (mainWindow?.isMaximized()) mainWindow.unmaximize();
  else mainWindow?.maximize();
});
ipcMain.on('close-window', () => mainWindow?.close());

ipcMain.handle('open-folder-dialog', async () => {
  if (!mainWindow) return null;
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  if (canceled || !filePaths.length) return null;
  
  const folderPath = filePaths[0];
  try {
    const files = fs.readdirSync(folderPath);
    return { path: folderPath, files };
  } catch (err) {
    return { path: folderPath, files: [], error: err.message };
  }
});

ipcMain.handle('read-file-content', async (event, filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    return `Error reading file: ${err.message}`;
  }
});

ipcMain.handle('write-file-content', async (event, filePath, content) => {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('execute-command', (event, cmd) => {
  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
      resolve(stdout || stderr || (error ? error.message : 'Command executed successfully with no output.'));
    });
  });
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
