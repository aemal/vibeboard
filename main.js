const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let windowCount = 0;

function createWindow() {
  windowCount++;

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
    fullscreen: true,
    show: false,
    title: `Whiteboard ${windowCount}`
  });

  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
    win.focus();
  });

  win.on('closed', () => {
    // Window cleanup handled automatically
  });

  return win;
}

// Handle new window creation from renderer
ipcMain.handle('create-new-window', () => {
  createWindow();
});

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});