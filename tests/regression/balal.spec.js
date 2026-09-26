import {test,expect} from '@playwright/test'

test.describe("",()=>{

    test.beforeAll(async ({ page }) => {
        await page.goto('https://example.com/balal');
    });

  
    test('Balal page should load correctly', async ({ page }) => {   
        await expect(page).toHaveTitle(/Balal/);
    });

     test('Balal page should load correctly 111', async ({ page }) => {   
        await expect(page).toHaveTitle(/Balal/);
    });

    test('Balal page should have a specific element', async ({ page }) => {
        const element = await page.$('selector-for-element');
        await expect(element).not.toBeNull();
    });

       test('Balal page should have another specific element222', async ({ page }) => {
        const anotherElement = await page.$('selector-for-another-element');
        await expect(anotherElement).not.toBeNull();
    });

    test('Balal page should have another specific element', async ({ page }) => {
        const anotherElement = await page.$('selector-for-another-element');
        await expect(anotherElement).not.toBeNull();
    });

    test('Balal page should have another specific element 1234', async ({ page }) => {
        const anotherElement = await page.$('selector-for-another-element');
        await expect(anotherElement).not.toBeNull();
    });
    
    test('Sudip page should have another specific element Testing gitpush', async ({ page }) => {
        const anotherElement = await page.$('selector-for-another-element');
        await expect(anotherElement).not.toBeNull();
    });
   
    

})
