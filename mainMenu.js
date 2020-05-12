module.exports = [
    {
        label: "Electron",
        submenu: [
            { label: "Item 1" },
            { label: "Item 2", submenu: [{ label: "SubItem 1" }] },
            { label: "Item 3" }
        ]
    },
    {
        label: "Edit",
        submenu: [
            { role: "undo" },
            { role: "redo" },
            { role: "copy" },
            { role: "paste" },
            { role: "cut" }
        ]
    },
    {
        label: "Actions",
        submenu: [
            {
                label: "Dev Tools",
                role: "toggleDevTools"
            },
            {
                label: "Full Screen",
                role: "toggleFullScreen"
            },
            {
                label: "Actions 2",
                enabled: false

            },
            {
                label: "Greet",
                click: () => { console.log("Greetings from main menu"); },
                accelerator: "Shift+Alt+G"
            },
        ]
    }
]