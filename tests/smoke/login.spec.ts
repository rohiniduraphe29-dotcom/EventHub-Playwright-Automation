import { expect} from '@playwright/test';
import LoginPage from "../../pages/LoginPage";
import HomePage from '../../pages/HomePage';
import { loginData } from '../../test-data/loginData';
import { test } from '../../fixtures/test';


test.describe('Valid Login Credentials ',() =>{

test(' Verify user can login with valid credentials' , async({page, loginpage }) =>{
    
    const homepage = new HomePage(page);
    await homepage.verifyHomePage();

});

test('Verify Browse Events functionality', async({ page, loginpage  }) =>{ 
   const homepage = new HomePage(page);
   await homepage.clickBrowseEvents();
   await expect(page.getByText('Upcoming Events', { exact: true })).toBeVisible();
});

test('Verify event can be opened', async ({ page, loginpage  }) =>{
    const homepage = new HomePage(page);
    await homepage.clickDilliDiwaliMela();
    await expect(page.getByRole('heading',{ name: 'Book Tickets'})).toBeVisible();
});
});

for (const data of loginData.invalidLoginData) {
test.describe(`Invalid Login Credentials: ${data.name}`, () => {

  test('Verify the invalid Login Functionality', async ({ page }) => {
    await page.goto('/');

    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    const loginPage = new LoginPage(page);

    await loginPage.loginUser(
      data.email,
      data.password
    );

    await expect(loginPage.invalidLoginMessage).toBeVisible();
  });

}); 
}