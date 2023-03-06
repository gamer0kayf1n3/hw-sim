const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    change: (details, state) => ipcRenderer.send('change', details, state)
})