
import { test, expect } from '@playwright/test';
import { invalidLoginData } from '../../test-data/apiLoginData';
import AuthApi from './AuthApi';

for (const data of invalidLoginData) {
  test(`Login API - ${data.name}`, async ({ request }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login(
      data.email,
      data.password
    );

    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    expect(responseBody.success).toBe(false);
    expect(responseBody.user).toBeUndefined();
    expect(responseBody.token).toBeFalsy();
  });
}
