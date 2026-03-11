const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  createNewWindow: () => ipcRenderer.invoke('create-new-window'),
  saveState: (state) => ipcRenderer.invoke('save-state', state),
  loadState: (instanceId) => ipcRenderer.invoke('load-state', instanceId),
  getSavedStates: () => ipcRenderer.invoke('get-saved-states')
});