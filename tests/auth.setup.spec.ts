import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login Functionality',() => {
    test('Verify user can Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.loginUser(
            loginData.validUser.email,
            loginData.validUser.password
        );
        await expect(page.getByRole('heading', { name: 'Discover & Book' })).toBeVisible();
        await page.context().storageState({path: 'playwright/.auth/user.json'});
    });
});