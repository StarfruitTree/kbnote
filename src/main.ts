import { app, BrowserWindow } from 'electron'

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

function createWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      devTools: isDev,
      nodeIntegration: isDev,
    },
  })

  if (isDev) {
    window.loadURL(`http://localhost:3000`)
  } else {
    window.loadFile('./dist/index.html')
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
