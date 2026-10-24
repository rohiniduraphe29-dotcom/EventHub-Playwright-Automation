import {test as base} from'@playwright/test';
import LoginPage from '../pages/LoginPage';

export const test = base.extend<{ loginpage: LoginPage }>({
    
    
    
       loginpage: async ({ page }, use) => {
         await page.goto('/');
         
        const login = new LoginPage(page);

        await use(login);
    }
    }); 
