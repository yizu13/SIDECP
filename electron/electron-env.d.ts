/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import('electron').IpcRenderer
  electronTheme: {
    setTheme: (theme: 'light' | 'dark' | 'system') => Promise<void>;
    getTheme: () => Promise<'light' | 'dark' | 'system'>;
  }
  windowAPI: {
    resizeWindow: (w: number, h:number) => Promise<void>,
    setFullscreen: (flag: any) => Promise<void>,
    getScreenSize: () => Promise<{ width: number; height: number }>,
  }
}
