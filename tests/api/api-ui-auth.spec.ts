import 'dotenv/config';
import { test, expect } from '@playwright/test';
import AuthApi from './AuthApi';


test('Authenticate through API and open EventHub UI', async ({ request, page }) => {
  const email = process.env.EVENTHUB_EMAIL;
  const password = process.env.EVENTHUB_PASSWORD;

  expect(email).toBeTruthy();
  expect(password).toBeTruthy();

  const authApi = new AuthApi(request);
  const response = await authApi.login(email!, password!);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.success).toBe(true);

  const token = responseBody.token;
  expect(token).toBeTruthy();

  // Your task: Set the token in Local Storage
  await page.addInitScript((authToken) => {
    localStorage.setItem('eventhub_token', authToken);
  }, token);

   // Then open EventHub and verify the home page.
  await page.goto('https://eventhub.rahulshettyacademy.com/');

await expect(
  page.getByRole('heading', { name: 'Discover & Book' })
).toBeVisible();

  
 
});
