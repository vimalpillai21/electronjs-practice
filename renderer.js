// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const remote = require("electron").remote;
const { dialog, BrowserWindow, app } = remote;

// console.log("Hello World!!!");
// console.log(remote);

const button = document.getElementById("test-button");
button.addEventListener("click", (e) => {
    console.log("Logging");
    // dialog.showMessageBox({message: "Dialog invoked from renderer process!!!"});
    // secWindow =  new BrowserWindow({
    //     width:400,height:350
    // });
    // secWindow.loadFile("index.html");
    // console.log(remote.getGlobal("myapp"));
    // app.quit();

    let win  = remote.getCurrentWindow()
    win.maximize();
});