import { Locator, Page, expect } from "@playwright/test";
import { loginData } from "../test-data/loginData";

class LoginPage
{
    page: Page;
    email: Locator;
    password: Locator;
    submit: Locator;
    invalidLoginMessage: Locator;

    constructor(page:Page){
        this.page =page;
        this.email = page.getByRole('textbox',{name:'Email'});
        this.password = page.getByLabel('Password');
        this.submit = page.getByRole('button', {name: 'Sign In'});
        this.invalidLoginMessage = page.getByText('Invalid email or password');

    }
    async loginUser(email: string, password: string)
    {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submit.click();
    }
   async loginWithInvalidCredentials() {
    await expect(this.invalidLoginMessage).toBeVisible();
}
}

export default LoginPage;