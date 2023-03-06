const client = require('discord-rich-presence')('1042406355866222643');
const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 316,
        height: 123,
        frame: false,
        resizable: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            devTools: false
        },
    })
    ipcMain.on('change', (event, details, state) => {
      client.updatePresence({
        details: details,
        state: state,
        largeImageKey: 'clip',
        largeImageText: "AAAAAA",
        instance: true
    });
    })
    win.loadFile('ui.html')
}
app.whenReady().then(() => {
    createWindow()
})

/*
client.updatePresence({
    details: 'Doing assignments',
    state: "Current Subject: Economics",
    largeImageKey: 'clip',
    largeImageText: "AAAAAA",
    instance: true
});*/