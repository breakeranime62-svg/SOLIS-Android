import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.solis.game',
  appName: 'SOLIS',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#0c0e18'
  }
};

export default config;
