const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

app.on("ready", createWindow);
app.setName("Web Playgrounds");

console.log(`file://${path.join(__dirname, "../build/index.html")}`);

function createWindow() {
  mainWindow = new BrowserWindow({});
  mainWindow.maximize();
  mainWindow.setTitle("Web Playgrounds");
  const devUrl = "http://localhost:3000";
  const buildUrl = `file://${path.join(__dirname, "../build/index.html")}`;
  console.log(buildUrl);
  const url = isDev ? devUrl : buildUrl;
  mainWindow.loadURL(url);
}
