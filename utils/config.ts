import fs from 'fs';
import path from 'path';

interface SNConfig {
  SN_BASE_URL: string;
  SN_USER: string;
  SN_PASS: string;
}

export const loadSNConfig = (): SNConfig => {
  const secretsPath = path.resolve(__dirname, '../fixtures/secrets.json');
  const file = fs.readFileSync(secretsPath, 'utf-8');
  return JSON.parse(file);
};
