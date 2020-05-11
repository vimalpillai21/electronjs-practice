// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog} = require('electron')
const path = require('path');




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

  mainWindow.loadFile('index.html')
  mainWindow.webContents.on("did-finish-load", () => {
   const file =  dialog.showOpenDialog({
      button:"Select a photo",
      // defaultPath: app.getPath("desktop"),
      properties: ['openFile','multiSelections' ]
    }).then((filepath) => {
      console.log(filepath);
      console.log("Hello WOlrd reached here!!!");
    }
    );
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

// app.on("browser-window-blur", () => {
//   console.log("app is blurred!!!");
//   setTimeout(app.quit,3000);
// });
