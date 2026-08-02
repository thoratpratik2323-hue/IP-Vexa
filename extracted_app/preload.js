const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  close:    () => ipcRenderer.send('close-window'),
  selectFolder: () => ipcRenderer.invoke('open-folder-dialog'),
  readFile: (path) => ipcRenderer.invoke('read-file-content', path),
  writeFile: (path, content) => ipcRenderer.invoke('write-file-content', path, content),
  exec: (cmd) => ipcRenderer.invoke('execute-command', cmd),
});
