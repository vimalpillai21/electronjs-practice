// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path');

// setTimeout(() => {
//   console.log(app.isReady());
// },2000);


function createWindow () {
  // Create the browser window.
  console.log("Creating window!!!");
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
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
  console.log(app.getPath("desktop"));
  console.log(app.getPath("music"));
  console.log(app.getPath("temp"));
  console.log(app.getPath("userData"));
});

app.on("before-quit", (e) => {
  console.log("App is quitting!!!");
  // e.preventDefault();
});

app.on("browser-window-focus", () => {
  console.log("app is in focus!!!");
});

app.on("browser-window-blur", () => {
  console.log("app is blurred!!!");
  // setTimeout(app.quit,3000);
});
