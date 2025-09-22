import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';

const SN_USER = process.env.SN_USER!;
const SN_PASS = process.env.SN_PASS!;

test('valid login works', async ({ page }) => {
  const login = LoginPage(page);
  await login.goto();
  await login.loginSuccess(SN_USER, SN_PASS);
  await expect(page).toHaveURL(/.*now\/nav\/ui\/classic.*/);
});

test('invalid login fails', async ({ page }) => {
  const login = LoginPage(page);
  await login.goto();
  await login.loginFailure('wrongUser', 'wrongPass');
  await expect(login.errorMsg).toContainText(/invalid/i, { timeout: 10000 });
});
