import { test, expect } from '@playwright/test';

test('invalid login shows error', async ({ page }) => {
  await page.goto('https://dev194623.service-now.com/navpage.do');

  await page.getByRole('textbox', { name: 'User name' }).fill('Adam');
  await page.getByRole('textbox', { name: 'Password' }).fill('Wudarczyk');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#output_messages div')).toHaveText(/User name or password invalid/i);
});
