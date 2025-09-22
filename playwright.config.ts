import { defineConfig } from '@playwright/test';
import { loadSNConfig } from './utils/config';

const secrets = loadSNConfig();

process.env.SN_USER = secrets.SN_USER;
process.env.SN_PASS = secrets.SN_PASS;
process.env.SN_BASE_URL = secrets.SN_BASE_URL;

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  use: {
    baseURL: secrets.SN_BASE_URL,
    headless: false,
  },
});
