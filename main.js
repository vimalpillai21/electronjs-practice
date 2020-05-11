// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const windowStateKeeper = require("electron-window-state");

const path = require('path');

// setTimeout(() => {
//   console.log(app.isReady());
// },2000);



let mainWindow, secondaryWindow;

function createWindow() {
  // Create the browser window.
  console.log("Creating window!!!");
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  
  mainWindow = new BrowserWindow({
    width: mainWindowState.width,
    height: mainWindowState.height,
    x: mainWindowState.x, y: mainWindowState.y,
    // minWidth:300,
    // minHeight:150,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
      nodeIntegration: true
    }
  });
  // secondaryWindow = new BrowserWindow({
  //   width: 600,
  //   height: 300,
  //   minWidth:300,
  //   minHeight:150,
  //   webPreferences: {
  //     // preload: path.join(__dirname, 'preload.js')
  //     nodeIntegration: true
  //   }
  // });

  mainWindow.on("focus", () => {
    console.log("main window is focused!!!");
  });

  // secondaryWindow.on("focus", () => {
  //   console.log("secondary window is focused!!!")
  // });

  app.on("close", () => {
    console.log("App is focused!!!");
  });


  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindowState.manage(mainWindow);

  // secondaryWindow.on("closed", () => {
  //   mainWindow.maximize();
  // });

  // mainWindow.on("close", ()=> {
  //   mainWindow = null;
  // });

  // secondaryWindow.on("close", ()=> {
  //   secondaryWindow = null;
  // });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

setTimeout(() => {
  console.log(BrowserWindow.getAllWindows());
}, 2000);

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
app.on("ready", () => {
  console.log("App is ready!!!");
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
