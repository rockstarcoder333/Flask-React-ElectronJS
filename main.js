const getPort = require('get-port');
const isDevMode = require('electron-is-dev');
const path = require('path');
const { spawn } = require('child_process');

// Modules to help control application life cycle
const { app, BrowserWindow, ipcMain } = require('electron');
const { get } = require('axios');

// Dynamically set the port number to an open port within the range of 3000-3999
// This way if a port is in use it will just go to the next.
let port;
(async () => {
  port = await getPort({ port: getPort.makeRange(3001, 3999) });
  ipcMain.on('get-port-number', (event, _arg) => event.returnValue = port);
})();

const shutdown = (port)=> {
  get(`http://localhost:${port}/quit`)
    .then(() => app.quit())
    .catch(()=> app.quit());
};

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app or localhost for (dev).
  if(isDevMode) mainWindow.loadURL('http://localhost:3000');
  else mainWindow.loadFile(path.join(__dirname, 'build/index.html'));

  // Open the DevTools.
   mainWindow.webContents.openDevTools();

  // Set opacity for title on window blur & focus
  const setTitleOpacity = value => `
    document.getElementById('electron-window-title-text').style.opacity = ${value};
    document.getElementById('electron-window-title-buttons').style.opacity = ${value}
  `;

   const executeOnWindow = command => mainWindow.webContents.executeJavaScript(command);
   mainWindow.on('focus', ()=> executeOnWindow(setTitleOpacity(1)));
   mainWindow.on('blur',  ()=> executeOnWindow(setTitleOpacity(.5)));

   // Send window control event listeners to front end
   ipcMain.on('app-maximize', (_event, _arg) => mainWindow.maximize());
   ipcMain.on('app-minimize', (_event, _arg) => mainWindow.minimize());
   ipcMain.on('app-quit', (_event, _arg) => shutdown(port));
   ipcMain.on('app-unmaximize', (_event, _arg) => mainWindow.unmaximize());
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // Run Flask in a shell for developer mode.
  if(isDevMode) spawn(`python app.py ${port}`, { detached: true, shell: true, stdio: 'inherit' });

  // Connect to Python micro-services for production.
  else spawn(`start ./resources/app/app.exe ${port}`, { detached: false, shell: true, stdio: 'pipe' });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    shutdown(port);
});
