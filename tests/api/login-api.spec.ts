
import { test, expect } from '@playwright/test';
import AuthApi from './AuthApi';

test('Verify login API with valid credentials', async ({ request }) => {
  const email = process.env.EVENTHUB_EMAIL;
  const password = process.env.EVENTHUB_PASSWORD;

  expect(email).toBeTruthy();
  expect(password).toBeTruthy();

  const authApi = new AuthApi(request);
  const response = await authApi.login(email!, password!);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.success).toBe(true);
  expect(responseBody.user.email).toBe(email);
  expect(responseBody.token).toBeTruthy();
});
