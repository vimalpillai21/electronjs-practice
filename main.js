// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path');
global["myapp"] = "A var set in main.js";




function createWindow () {
  // Create the browser window.
  console.log("Creating window!!!");
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
        nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

}


app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on("ready",() =>{
  console.log("App is ready!!!");
});

app.on("before-quit", (e) => {
  console.log("App is quitting!!!");
});

app.on("browser-window-focus", () => {
  console.log("app is in focus!!!");
});

