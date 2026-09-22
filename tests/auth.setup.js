import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import user from '../testdata/user.json';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/login');

    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication(user.username, user.password);

    // The menu icon is present even on /login, so it's not a reliable signal.
    // "Sign out" only renders once the app has actually written the JWT to
    // localStorage, which is what makes the session worth persisting.
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.signOutButton.waitFor();

    await page.context().storageState({ path: authFile });

});
