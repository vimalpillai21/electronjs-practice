// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut, Menu, MenuItem } = require('electron')
const path = require('path');

// let mainMenu = new Menu();
//  let menuItem1 = new MenuItem({
//    label: "Electron",
//    submenu: [
//       {label:"Item 1"},
//       {label: "Item 2",submenu:[{label:"SubItem 1"}]},
//       {label: "Item 3"}
//    ]
//  }); 
//  mainMenu.append(menuItem1);
let mainMenu = Menu.buildFromTemplate(require("./mainMenu"));
let contextMenu = Menu.buildFromTemplate([
  {label: "Item 1"},
  {role: "editMenu"}
]);

function createWindow() {
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
  mainWindow.loadFile('index.html');
  globalShortcut.register("CommandOrControl+G", () => {
    console.log("User pressed G with combination key!!!");
  });

  Menu.setApplicationMenu(mainMenu);

  mainWindow.webContents.on("context-menu", (e) => {
    contextMenu.popup(mainWindow);
    // contextMenu.popup(mainWindow);
  });
}

app.whenReady().then(createWindow)


app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {

  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})


app.on("ready", () => {
  console.log("App is ready!!!");
});



app.on("before-quit", (e) => {
  console.log("App is quitting!!!");
});

app.on("browser-window-focus", () => {
  console.log("app is in focus!!!");
});


