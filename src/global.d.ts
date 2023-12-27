// global.d.ts
export {};

declare global {
  interface Window {
    electronAPI: {
      readFile: (string) => Promise<string>;
    };
  }
}
