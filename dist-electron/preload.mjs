"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(channel, (event, ...args2) => listener(event, ...args2));
  },
  off(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.off(channel, ...omit);
  },
  send(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.send(channel, ...omit);
  },
  invoke(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.invoke(channel, ...omit);
  }
  // You can expose other APTs you need here.
  // ...
});
electron.contextBridge.exposeInMainWorld("windowAPI", {
  resizeWindow: (w, h) => electron.ipcRenderer.send("resize-window", { w, h }),
  setFullscreen: (flag) => electron.ipcRenderer.invoke("set-fullscreen", flag),
  getScreenSize: async () => await electron.ipcRenderer.invoke("get-screen-size")
});
electron.contextBridge.exposeInMainWorld("electronTheme", {
  setTheme: (theme) => electron.ipcRenderer.invoke("set-theme", theme),
  getTheme: () => electron.ipcRenderer.invoke("get-theme")
});
