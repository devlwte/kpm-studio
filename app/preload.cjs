const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('kyrnAPI', {
  // Window controls
  minimizeWindow: () => ipcRenderer.invoke('window-minimize'),
  maximizeWindow: () => ipcRenderer.invoke('window-maximize'),
  closeWindow: () => ipcRenderer.invoke('window-close'),
  isWindowMaximized: () => ipcRenderer.invoke('window-is-maximized'),
  onWindowStateChange: (callback) => {
    const listener = (event, isMax) => callback(isMax);
    ipcRenderer.on('window-state-changed', listener);
    return () => ipcRenderer.removeListener('window-state-changed', listener);
  },

  // File dialogs & Drag-and-drop
  selectFolder: (title) => ipcRenderer.invoke('select-folder', title),
  selectFile: (filters, title) => ipcRenderer.invoke('select-file', filters, title),
  scanFolder: (folderPath) => ipcRenderer.invoke('scan-folder', folderPath),
  getExeMetadata: (exePath) => ipcRenderer.invoke('get-exe-metadata', exePath),
  getPathForFile: (file) => {
    if (webUtils && typeof webUtils.getPathForFile === 'function') {
      return webUtils.getPathForFile(file);
    }
    return file.path || '';
  },

  // KPKG Packer Engine
  packKpkg: (options) => ipcRenderer.invoke('pack-kpkg', options),
  onPackProgress: (callback) => {
    const listener = (event, data) => callback(data);
    ipcRenderer.on('pack-progress', listener);
    return () => ipcRenderer.removeListener('pack-progress', listener);
  },

  // KPKG Installer Engine
  inspectKpkg: (filePath, password) => ipcRenderer.invoke('inspect-kpkg', typeof filePath === 'object' ? filePath : { filePath, password: password || '' }),
  installKpkg: (options) => ipcRenderer.invoke('install-kpkg', options),
  onInstallProgress: (callback) => {
    const listener = (event, data) => callback(data);
    ipcRenderer.on('install-progress', listener);
    return () => ipcRenderer.removeListener('install-progress', listener);
  },

  // Ecosystem & Uninstaller Manager
  getInstalledPackages: () => ipcRenderer.invoke('get-installed-packages'),
  uninstallPackage: (pkg) => ipcRenderer.invoke('uninstall-package', pkg),
  launchApp: (exePath) => ipcRenderer.invoke('launch-app', exePath),
  openFolder: (folderPath) => ipcRenderer.invoke('open-folder', folderPath)
});
