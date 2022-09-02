const electron = require('electron')
const {app, BrowserWindow, Menu} = electron

let win;
let windowConfig = {
  width: 800,
  height: 600
}

function createWindow() {
  win = new BrowserWindow(windowConfig)
  win.loadURL(`file://$(__dirname)/index.html`);
  win.webContents.openDevTools()
  win.on('close', () => {
    win = null
  })
  win.on('resize', () => {
    win.reload()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
})
