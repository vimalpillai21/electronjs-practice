// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

// setTimeout(() => {
//   console.log(app.isReady());
// },2000);

let mainWindow;
function createWindow () {
  // Create the browser window.
  console.log("Creating window!!!");
  mainWindow = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
  let webContents = mainWindow.webContents;
  webContents.on("did-finish-load",(e) => {
    webContents.send("mailbox","You have one mail!!");
  });
  mainWindow.on("closed",() => {
    mainWindow = null;
  })
}

app.whenReady().then(createWindow)


app.on('window-all-closed', function () {
 
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
app.on("ready",() =>{
  console.log("App is ready!!!");
});

app.on("before-quit", (e) => {
  console.log("App is quitting!!!");
  // e.preventDefault();
});

app.on("browser-window-focus", () => {
  console.log("app is in focus!!!");
});

ipcMain.on("channel1", (e,args) => {
  console.log(args);
  e.sender.send("channel1-response", "Channel1 message has been acknowledged!!!");
});