// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require("electron");
const button = document.getElementById("test");

button.addEventListener("click", (e) => {
    ipcRenderer.send("channel1", "Hello from main window");
})


ipcRenderer.on("channel1-response", (e, args) => {
    console.log(args);
});

ipcRenderer.on("mailbox", (e, args) => {
    console.log(args);
});
