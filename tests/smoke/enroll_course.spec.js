import {test,expect} from "../../fixture/fixture.js"
import { HomePage } from "../../pages/homePage.js"


test.describe("Enroll course test",{tags:["smoke","enroll"]},()=>
{
    test("Enroll course",async({page,homePage})=>
    {
         //const homePage = new HomePage(page);
         await homePage.navigateToHomePage();
         await homePage.enrollToCourse();

         //expect(await loginPage.getErrorMessage()).toBe(user.message) 
         await expect(homePage.successMessg).toBeVisible();
         await homePage.cancelPopup()
    })
    
})