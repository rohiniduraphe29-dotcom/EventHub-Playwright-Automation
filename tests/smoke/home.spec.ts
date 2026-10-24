import { test, expect } from '@playwright/test';
import HomePage from '../../pages/HomePage';

test('verify eventhub home page', async({page}) =>{
  await page.goto('/');

  await expect(page).toHaveTitle('EventHub — Discover & Book Events');

  
  const homePage = new HomePage(page);
  await homePage.verifyHomePage();
  await homePage.clickBrowseEvents();

  await expect(
    page.getByText('Upcoming Events', { exact: true })
  ).toBeVisible();
}); 


