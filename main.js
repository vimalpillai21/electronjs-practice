const { app, BrowserWindow, session } = require('electron')
const path = require('path');

let mainWindow, secondaryWindow;

function createWindow () {
  console.log("Creating window!!!");

  // let customSession = session.fromPartition("part1");
  // persistent session
  // let customSession = session.fromPartition("persist:part1");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    x:100,
    y:100,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
  // ------------------------------------
  secondaryWindow = new BrowserWindow({
    width: 500,
    height: 300,
    x:200,
    y:200,
    webPreferences: {
      nodeIntegration: true,
      // session: customSession
      partition: "persist:part1"
    }
  });

  secondaryWindow.loadFile('index.html');
  // ------------------------------------
  let ses = mainWindow.webContents.session;
  // let ses2 = secondaryWindow.webContents.session;
  ses.clearStorageData();
  // console.log(Object.is(ses,session.defaultSession));
  // console.log(ses);
  // console.log(ses2);
  // console.log(Object.is(ses,ses2));
  // console.log(Object.is(ses,customSession));

  mainWindow.on("closed",() => {
    console.log("main window closed");
  });

  secondaryWindow.on("closed",() => {
    console.log("main window closed");
  });
}

app.whenReady().then(createWindow)

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

