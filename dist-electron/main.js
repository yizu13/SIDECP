import { app, BrowserWindow, ipcMain, screen, nativeTheme } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 980,
    height: 720,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs")
    }
  });
  win.setIcon(path.join(__dirname, "../public/Cedil_logo.png"));
  win.webContents.openDevTools();
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
  win.setMenu(null);
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.handle("resize-window", (_, width, height) => {
  win == null ? void 0 : win.setSize(width, height);
});
ipcMain.handle("set-fullscreen", (_, flag) => {
  win == null ? void 0 : win.setFullScreen(flag);
});
ipcMain.handle("get-screen-size", async () => {
  const { width, height } = await screen.getPrimaryDisplay().workAreaSize;
  return { width, height };
});
ipcMain.handle("set-theme", (_, theme) => {
  nativeTheme.themeSource = theme;
});
ipcMain.handle("get-theme", () => {
  return nativeTheme.themeSource;
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
