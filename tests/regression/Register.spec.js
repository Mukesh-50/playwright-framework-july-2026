import {test,expect} from '@playwright/test'

test('Register page should load correctly', async ({ page }) => {   
    await page.goto('/signup');
    await expect(page).toHaveURL(/signup/);
});

