import { test, expect } from '@playwright/test';

test('mock events endpoint', async ({ page }) => {
  await page.route('**/*events*', async (route) => {
    console.log('Intercepted:', route.request().url());

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        events: [
          {
            id: 1,
            name: 'Mocked Event 1',
          },
        ],
      }),
    });
  });

  await page.goto('/');
  await page.getByRole('link', { name: 'Browse Events' }).first().click();

  await expect(page.getByText('Mocked Event 1')).toBeVisible();
});

test('mock events endpoint with delay', async ({ page }) => {
    await page.route('**/api/events**', async (route) => {
         console.log('Intercepted:', route.request().url());
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Internal Server Error',
            }),
        });
    });

      await page.goto('/');
  await page.getByRole('link', { name: 'Browse Events' }).first().click();

  await expect(
    page.getByRole('heading', { name: "Couldn't load events" })
  ).toBeVisible();

  await expect(
    page.getByText('There was a problem connecting to the server. Please try again.')
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Retry' })
  ).toBeVisible();

});
