// pages/LoginPage.ts
import { Page } from '@playwright/test';

export const LoginPage = (page: Page) => {
  const userInput = page.locator('#user_name');
  const passInput = page.locator('#user_password');
  const submitBtn = page.locator('#sysverb_login');
  const errorMsg = page.locator('#output_messages .outputmsg_text');
  const loggedInHeader = page.locator('.pdi-homepage__creator-studio', {
    hasText: 'Creator Studio',
  });

  return {
    goto: async () => {
      await page.goto('https://dev194623.service-now.com/login.do', {
        waitUntil: 'domcontentloaded',
      });
    },

    loginSuccess: async (username: string, password: string) => {
      await userInput.fill(username);
      await passInput.fill(password);
      await submitBtn.click();

      await page.waitForURL('**/now/nav/ui/classic/**', { timeout: 20000 });
    },

    loginFailure: async (username: string, password: string) => {
      await userInput.fill(username);
      await passInput.fill(password);
      await submitBtn.click();
      await errorMsg.waitFor({ timeout: 10000 });
    },

    errorMsg,
    loggedInHeader,
  };
};
