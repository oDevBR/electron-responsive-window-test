 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    return;
 }

const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    resizable: false,
    closable: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  mainWindow.loadFile('index.html')
  mainWindow.show()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}



app.on('ready', () => setTimeout(createWindow, 300))

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
